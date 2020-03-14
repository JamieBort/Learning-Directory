const express  = require("express");
const signupRouter = express.Router();
const models = require("../models");

signupRouter.get("/", function(req, res) {
  res.render('signup');
});

signupRouter.post("/", function(req, res) {
  if (!req.body || 
      !req.body.username || 
      !req.body.password || 
      !req.body.passwordConfirm || 
      !req.body.displayName) {
      return res.redirect("/");
  }

  req.assert('passwordConfirm', 'Passwords must match').equals(req.body.password);

  var errors = req.validationErrors();

  if(errors) {
    return res.render('signup', {errors: errors, data: req.body});
  } else {
  var newUser = models.user.build({
    username : req.body.username,
    password : req.body.password,
    displayname : req.body.displayName 
  });
  newUser
    .save()
    .then(function(savedUser) {
      res.redirect("/login");
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
  }
});

module.exports = signupRouter;