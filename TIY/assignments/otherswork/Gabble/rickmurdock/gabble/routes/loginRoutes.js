
const express  = require('express');
const loginRouter = express.Router();
const models = require("../models");

loginRouter.get("/", function(req, res) {
  res.render('login');
});

loginRouter.post("/", function(req, res) {
  if (!req.body || !req.body.username || !req.body.password) {
    return res.redirect("login");
  }

  var requestingUser = req.body;
  var userRecord;

  models.user
  .findOne({
      where: {
        username: requestingUser.username,
        password: requestingUser.password
      }
    }).then(function (user) {
      if (user) {
        req.session.user = {
          username: user.username, 
          displayName: user.displayname,
          userId: user.id
        }
        res.redirect("/");
      } else {
        console.log("USER NOT FOUND");
        return res.redirect("login");
      }
    });
});

module.exports = loginRouter;