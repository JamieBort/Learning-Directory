const express  = require('express');
const creategabRouter = express.Router();
const shared = require('../public/sharedFunctions.js');
const models = require("../models");

creategabRouter.get("/", shared.checkAuth, function(req, res) {
  res.render('creategab', { user : req.session.user});
});

creategabRouter.post("/", function(req, res) {
  if(!req.body || !req.body.newgab) {
    res.redirect("/creategab");
  }

  var newGab = models.message.build({
    gab : req.body.newgab,
    authorId : req.session.user.userId
  });
  newGab
    .save()
    .then(function(savedGab) {
      res.redirect("/");
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

module.exports = creategabRouter;