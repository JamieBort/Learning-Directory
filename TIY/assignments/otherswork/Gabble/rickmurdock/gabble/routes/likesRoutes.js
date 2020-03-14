const express  = require('express');
const likesRouter = express.Router();
const models = require("../models");

likesRouter.get("/:id", function(req, res) {
  models.message
    .findOne({ 
      where: { id: req.params.id },
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
    .then(function(foundLikes) {
      console.log(foundLikes);
      res.render("likes", { messages: foundLikes,
                            user: req.session.user });
    })
    .catch(function(err) {
      res.status(500).send(err);
    }); 
});

module.exports = likesRouter;