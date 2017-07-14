var Person = require("../models/person");
var Company = require("../models/company");

//all middleware below
var middlewareObj = {};

middlewareObj.checkPersonProfileOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Person.findById(req.params.id, function(err, foundPerson){
            if(err){
                req.flash("error", "Profile not found");
                res.redirect("back");
            } else {
            //does user own the person profile?
            if(foundPerson.author.id.equals(req.user._id)){
                next();    
            } else {
                req.flash("error", "You don't have permission to do that");
                res.redirect("back");
            }
           }
        }); 
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

middlewareObj.checkCompanyProfileOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Company.findById(req.params.id, function(err, foundCompany){
            if(err){
                req.flash("error", "Profile not found");
                res.redirect("back");
            } else {
            //does user own the company profile?
            if(foundCompany.author.id.equals(req.user._id)){
                next();    
            } else {
                req.flash("error", "You don't have permission to do that");
                res.redirect("back");
            }
           }
        }); 
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
};

//middleware

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
};

module.exports = middlewareObj;