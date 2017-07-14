var express = require("express");
var router = express.Router({mergeParams: true});
var Person = require("../models/person");
var middleware = require("../middleware");
async = require("async");
var passport = require('passport');

//INDEX - show all people
router.get("/", function(req, res){
    var noPersonMatch = null;
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        //Get all people from DB
        Person.find({fullName: regex}, function(err, allPeople){
            if(err){
              res.json({success: false, message: err});
            } else {
                if(allPeople.length < 1){
                    res.json({success: true, noPersonMatch: true, message: "No person found with that name.  Try again."});
                } else {
                    res.json({success: true, people: allPeople, noPersonMatch: false});
                }
            }
        });
    } else {
      res.json({success: true, noPersonMatch: true, message: "No person found with that name.  Try again."});
        // //Get all people from DB
        // Person.find({}, function(err, allPeople){
        //     if(err){
        //       res.json({success: false, message: err});
        //     } else {
        //         if(allPeople.length < 1){
        //             res.json({success: true, noPersonMatch: true, message: "No person found with that name.  Try again."});
        //         } else {
        //             res.json({success: true, people: allPeople, noPersonMatch: false});
        //         }
        //     }
        // });
    }
});

router.get("/places", function(req, res){
    var noPersonMatch = null;
    if(req.query.city && req.query.state && req.query.country){

        Person.find({'location.city': req.query.city, 'location.state': req.query.state, 'location.country': req.query.country}, function(err, allPeople){
            if(err){
              res.json({success: false, message: err});
            } else {
                if(allPeople.length < 1){
                    res.json({success: true, noPersonMatch: true, message: "No person found with that place.  Try again."});
                } else {
                    res.json({success: true, people: allPeople, noPersonMatch: false});
                }
            }
        });
    }
    else
      res.json({success: false, message: "No person found with that place.  Try again."});
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  if (!req.body.city) {
      res.json({success: false, msg: "Please select a city from the auto-suggestions"});
  }
  else {
    Person.find({"author.id": req.user._id}, function(err, currentUserProfile){
      if(err){
          res.json({success: false, msg: err});
      }
      else {
       if(currentUserProfile.length > 0)
       {
         res.json({success: false, msg: "Each user can only create one profile"});
       }
       else{
         // get data from form and add to people array
         var firstName = req.body.firstName;
         var lastName = req.body.lastName;
         var fullName = req.body.firstName + " " + req.body.lastName;
         var image = req.body.image;
         var overview = req.body.overview;
         var author = {
             id: req.user._id,
             username: req.user.username
         };
         var location = { "city": req.body.city, "state": req.body.state, "country": req.body.country };
         var date = new Date();
         var nameUpdatedAt = date.getTime();
         var cityUpdatedAt = date.getTime();
         var stateUpdatedAt = date.getTime();
         var countryUpdatedAt = date.getTime();

         var newPerson = {firstName: firstName,
                          lastName: lastName,
                          fullName: fullName,
                          location: location,
                          image: image,
                          overview: overview,
                          author: author,
                          nameUpdatedAt: nameUpdatedAt,
                          cityUpdatedAt: cityUpdatedAt,
                          stateUpdatedAt: stateUpdatedAt,
                          countryUpdatedAt: countryUpdatedAt};
         //Create a new person and save to DB
         Person.create(newPerson, function(err, newlyCreated){
             if(err){
                 res.json({success: false, msg: err});
             } else {
                 res.json({success: true, msg: 'Successfully created.'});
             }
         });
       }
     }
   });
  }

});

//NEW - show form to create new person
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("people/new");
});

//EDIT PERSON ROUTE
router.get("/:id/edit", middleware.checkPersonProfileOwnership, function(req, res){

    var rankings = {};
    var asyncTasks = getRankingQueries(req.params.id, rankings);
    async.series(asyncTasks, function(){
    // All tasks are done now
    // Remove name if they are just the same as first name or last name or it will display twice
    for(name in rankings.names)
    {
      if(name == person.firstName || name == person.lastName)
      {
        delete rankings.names[name];
      }
    }
    res.render("people/edit", {person: person, rankings: rankings});
    });
});

//UPDATE PERSON ROUTE
router.put("/:id", middleware.checkPersonProfileOwnership, function(req, res){
    if (!req.body.person.location.city) {
        req.flash("error", "Please select a city from the auto-suggestions");
        res.redirect("back");
    } else {

    Person.findById(req.params.id, function(err, foundPerson){
       if(err){
           console.log(err);
       } else {

        var date = new Date();

        if(foundPerson.location.city != req.body.person.location.city)
        {
          req.body.person.cityUpdatedAt = date.getTime();
        }
        if(foundPerson.location.state != req.body.person.location.state)
        {
          req.body.person.stateUpdatedAt = date.getTime();
        }
        if(foundPerson.location.country != req.body.person.location.country)
        {
          req.body.person.countryUpdatedAt = date.getTime();
        }

        //find and update the correct person
        Person.findByIdAndUpdate(req.params.id, req.body.person, function(err, updatedPerson){
            if(err){
                res.redirect("/people");
            } else {
                //redirect somewhere (show page)
                req.flash("success", "Profile updated successfully");
                res.redirect("/people/" + req.params.id);
            }
        });
    }
    });
    }
});

//DESTROY PERSON ROUTE
router.delete("/:id", middleware.checkPersonProfileOwnership, function(req, res){
    Person.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/people");
        } else {
            res.redirect("/people");
        }
    });
});

//SHOW - shows more info about one person
router.get("/:id", function(req, res){
    //find the person with provided id
    var rankings = {};
    var asyncTasks = getRankingQueries(req.params.id, rankings);
    async.series(asyncTasks, function(){
    // All tasks are done now

    res.render("people/show", {person: person, rankings: rankings});
    });

});

function getRanking(columnName, searchParam, timeStamp, nameOrLocation, callback) {
      Person.find({[columnName]:searchParam, [nameOrLocation]: {$lt: timeStamp}}, function(err, foundPerson){
       if(err){
           console.log(err);
       }
       else {
        var ranking = foundPerson.length + 1;
        ordinalRanking = ordinal_suffix_of(ranking);
        callback(ordinalRanking);
    }
    });
}

function getCityRanking(location, timeStamp, callback) {
      Person.find({'location.city':location.city, 'location.state': location.state, 'location.country': location.country, cityUpdatedAt: {$lt: timeStamp}}, function(err, foundPerson){
       if(err){
           console.log(err);
       }
       else {
        var ranking = foundPerson.length + 1;
        ordinalRanking = ordinal_suffix_of(ranking);
        callback(ordinalRanking);
    }
    });
}

function getStateRanking(location, timeStamp, callback) {
      Person.find({'location.state': location.state, 'location.country': location.country, stateUpdatedAt: {$lt: timeStamp}}, function(err, foundPerson){
       if(err){
           console.log(err);
       }
       else {
        var ranking = foundPerson.length + 1;
        ordinalRanking = ordinal_suffix_of(ranking);
        callback(ordinalRanking);
    }
    });
}

function getRankingMatchingFirstNameOrLastName(searchParam, timeStamp, callback) {
      Person.find({$or: [ { firstName: searchParam }, { lastName: searchParam }, { fullName: searchParam } ], nameUpdatedAt: {$lt: timeStamp}}, function(err, foundPerson){
       if(err){
           console.log(err);
       }
       else {
        var ranking = foundPerson.length + 1;
        ordinalRanking = ordinal_suffix_of(ranking);
        callback(ordinalRanking);
    }
    });
}

function getNameRankings(fullName, timeStamp, callback) {
      var userNames = person.fullName.split(' ');
      var nameRankings = {};

      for(name in userNames)
      {
        nameRankings[userNames[name]] = 1;
      }

      Person.find({nameUpdatedAt: {$lt: timeStamp}}, function(err, people){
       if(err){
           console.log(err);
       }
       else {
        for(record in people)
        {
          var previousUserNameArray = people[record].fullName.split(' ');
          for(name in userNames)
          {
            if(previousUserNameArray.indexOf(userNames[name]) > -1)
            {
              nameRankings[userNames[name]] = nameRankings[userNames[name]] + 1;
            }
          }
        }
        for(ranking in nameRankings)
        {
          nameRankings[ranking] = ordinal_suffix_of(nameRankings[ranking]);
        }
        callback(nameRankings);
    }
    });
}

function getRankingQueries(personId, rankings){
    var asyncTasks = [];
    asyncTasks.push(function(callback){
       Person.findById(personId, function(err, foundPerson){
       if(err){
           console.log(err);
       } else {
           person = foundPerson;

       }
       callback();
    });
    });

   asyncTasks.push(function(callback){
      getRanking("fullName", person.fullName, person.nameUpdatedAt, "nameUpdatedAt", function(ordinalRanking)
    {
       rankings.fullName = ordinalRanking;
       callback();
    });
    });

   asyncTasks.push(function(callback){
      getRankingMatchingFirstNameOrLastName(person.firstName, person.nameUpdatedAt, function(ordinalRanking)
    {
       rankings.firstName = ordinalRanking;
       callback();
    });
    });

   asyncTasks.push(function(callback){
      getRankingMatchingFirstNameOrLastName(person.lastName, person.nameUpdatedAt, function(ordinalRanking)
    {
       rankings.lastName = ordinalRanking;
       callback();
    });
    });

   asyncTasks.push(function(callback){
      getNameRankings(person.fullName, person.nameUpdatedAt, function(namesOrdinalRankings)
    {
       rankings.names = namesOrdinalRankings;
       // Remove name if they are just the same as first name or last name or it will display twice
       for(name in rankings.names)
       {
        if(name == person.firstName || name == person.lastName)
        {
          delete rankings.names[name];
        }
       }
         callback();
    });
    });

   asyncTasks.push(function(callback){
      getCityRanking(person.location, person.cityUpdatedAt, function(ordinalRanking)
    {
       rankings.city = ordinalRanking;
       callback();
    });
    });

   asyncTasks.push(function(callback){
      getStateRanking(person.location, person.stateUpdatedAt, function(ordinalRanking)
    {
       rankings.state = ordinalRanking;
       callback();
    });
    });

   asyncTasks.push(function(callback){
      getRanking("location.country", person.location.country, person.countryUpdatedAt, "countryUpdatedAt", function(ordinalRanking)
    {
       rankings.country = ordinalRanking;
       callback();
    });
    });
   return asyncTasks;
}

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function escapeRegex(text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports = router;
