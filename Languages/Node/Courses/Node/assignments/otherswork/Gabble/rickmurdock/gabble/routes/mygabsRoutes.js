const express  = require('express');
const mygabsRouter = express.Router();
const shared = require('../public/sharedFunctions.js');
const models = require("../models");

mygabsRouter.get("/", shared.checkAuth, function(req, res) {
  models.message
    .findAll({ 
      where: { authorId: req.session.user.userId },
      order: [[ "createdAt", "DESC"]],
      include: [
        {
          model: models.user,
          as: "author"
        },
        {
          model: models.like,
          as: "likes",
          include: { 
            model: models.user,
            as: "user"
          }
        }
      ]
    })
    .then(function(foundMessages) {   
      console.log(foundMessages);  
    res.render("mygabs", { messages: foundMessages,
                          user: req.session.user });
    })
    .catch(function(err) {
      res.status(500).send(err);
    }); 
});

mygabsRouter.post("/:id", shared.checkAuth, function(req, res) {
  models.like
    .destroy({
      where: {
        messageId: req.params.id
      }
    })
    .then(function() {
      models.message
        .destroy({
          where: {
            id: req.params.id
          }
        })
    })
    .then(function() {
      res.redirect("/mygabs");
    })
    .catch(function(err) {
      res.status(500).send(err);
    }); 
});

module.exports = mygabsRouter;