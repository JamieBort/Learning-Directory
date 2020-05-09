const express = require('express');
const routes = express.Router();

// this middleware creates a default session
routes.use((req, res, next) => {
  // if we don't already have an array of foods
  if (!req.session.foods) {
    // then create an empty array of foods
    req.session.foods = [];
  }

  next();
});

// show a particular food
routes.get('/view/:index', function(req, res) {
  res.render('food', {
    foodItem: req.session.foods[req.params.index]
  });
});

// this endpoint will show a form I can use to add foods
routes.get('/form', function(req, res) {
  res.render('foodForm');
});

// this handles the posted data from the form and creates a new food item
routes.post('/add', function(req, res) {
  // get the food item details from the posted body data
  let foodItem = req.body;

  // validate the food item's data
  req.checkBody('name', 'Name is required').notEmpty();
  // make sure that the serving is provided.
  req.checkBody('serving', 'Serving is required').notEmpty();
  // make sure that the serving is provided.
  req.checkBody('serving', 'Serving is must uppercase').isUppercase();
  // get all errors from our validation that we just did as an array
  let errors = req.validationErrors();

  if (errors) {
    // there were errors, report them
    console.log(errors);

    res.render('foodForm', { errors: errors, foodItem: foodItem });
  } else {
    // there were no errors. save the food item

    // store the food item in our array of foods
    req.session.foods.push(foodItem);

    // now that I've added the food item to the array, redirect to the homepage
    res.redirect('/');
  }
});

module.exports = routes;
