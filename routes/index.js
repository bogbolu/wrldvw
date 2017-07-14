var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
var passport = require("passport");
var User = require("../models/user");

router.post("/register", function(req, res){console.log(req.body);

    let newUser = new User({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
      if(err) {
        res.json({success: false, msg: 'Failed to register user'});
      } else {
        res.json({success: true, msg: 'You are now registered and can log in!'});
      }
    });
});

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign(user, 'secret', {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong Password'});
      }
    });
  });
});

module.exports = router;
