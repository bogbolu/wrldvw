var express = require("express");
var router = express.Router({mergeParams: true});
var Company = require("../models/company");
var middleware = require("../middleware");
var passport = require('passport');

//INDEX - show all companies
router.get("/", function(req, res){
    var noCompanyMatch = null;
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), "gi");
        //Get all campgrounds from DB
        Company.find({fullName: regex}, function(err, allCompanies){
            if(err){
              res.json({success: false, message: err});
            } else {
                if(allCompanies.length < 1){
                  res.json({success: true, noCompanyMatch: true, message: "No company found with that name.  Try again."});
                }
                else
                  res.json({success: true, companies: allCompanies, noCompanyMatch: false});
            }
        });
    } else {
        //Get all companies from DB
        Company.find({}, function(err, allCompanies){
            if(err){
              res.json({success: false, message: err});
            } else {
                if(allCompanies.length < 1){
                    res.json({success: true, noCompanyMatch: true, message: "No company found with that name.  Try again."});
                } else {
                    res.json({success: true, companies: allCompanies, noCompanyMatch: false});
                }
            }
        });
    }
});

router.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  Company.find({"author.id": req.user._id}, function(err, currentUserCompany){
    if(err){
        res.json({success: false, msg: err});
    }
    else {
     if(currentUserCompany.length > 5)
     {
       res.json({success: false, msg: "Each user can only create five companies"});
     }
     else{
       // get data from form and add to people array
       var fullName = req.body.fullName;
       var location = req.body.location;
       var image = req.body.image;
       var overview = req.body.overview;
       var author = {
           id: req.user._id,
           username: req.user.username
       };

       var newCompany = {fullName: fullName, location: location, image: image, overview: overview, author: author};
       //Create a new person and save to DB
       Company.create(newCompany, function(err, newlyCreated){
           if(err){
               res.json({success: false, msg: err});
           } else {
               res.json({success: true, msg: 'Successfully created.'});
           }
       });
     }
   }
 });

});


//NEW - show form to create new company
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("companies/new");
});

//SHOW - shows more info about one company
router.get("/:id", function(req, res){
    //find the company with provided id
    Company.findById(req.params.id, function(err, foundCompany){
       if(err){
           console.log(err);
       } else {
           //render show template with that company
           res.render("companies/show", {company: foundCompany});
       }
    });

});

// EDIT COMPANY ROUTE
router.get("/:id/edit", middleware.checkCompanyProfileOwnership, function(req, res){
    Company.findById(req.params.id, function(err, foundCompany){
        if(err){
            req.flash("error", "You don't have permission to do that");
        } else {
            res.render("companies/edit", {company: foundCompany});
        }
    });
});

// UPDATE COMPANY ROUTE
router.put("/:id", middleware.checkCompanyProfileOwnership, function(req, res){
    //find and update the correct company
    Company.findByIdAndUpdate(req.params.id, req.body.company, function(err, updatedCompany){
        if(err){
            res.redirect("/companies");
        } else {
            //redirect somewhere (show page)
            req.flash("success", "Profile updated successfully");
            res.redirect("/companies/" + req.params.id);
        }
    });
});

//DESTROY COMPANY ROUTE
router.delete("/:id", middleware.checkCompanyProfileOwnership, function(req, res){
    Company.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/companies");
        } else {
            res.redirect("/companies");
        }
    });
});

function escapeRegex(text){
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports = router;
