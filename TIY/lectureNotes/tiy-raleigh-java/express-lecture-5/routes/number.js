const express = require('express');
const routes = express.Router();

// show a random number
routes.get(
  // this means to listen for a request to http://..../randomNumber
  '/random/:max',
  // this is the code that gets run when the request comes in
  function(req, res) {
    // generate my random number
    let myRandomNumber = Math.round(Math.random() * req.params.max);

    // render the randomNumber template using the provided information
    res.render('randomNumber', {
      randomNumber: myRandomNumber
    });
  }
);

module.exports = routes;
