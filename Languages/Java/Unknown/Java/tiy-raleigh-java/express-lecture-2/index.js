const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const moment = require('moment');
const foods = require('./food');
const fs = require('fs');
const app = express();

// tell express to use mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// tell express how to serve static files
app.use(express.static('public'));

// tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// configure the webroot
app.get('/', function(req, res) {
  res.render('home', {
    formattedDate: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
    foods: foods
  });
});

// show a particular food
app.get('/food/:id', function(req, res) {
  res.render('food', {
    foodItem: foods[req.params.id]
  });
});

// show a random number
app.get(
  // this means to listen for a request to http://..../randomNumber
  '/randomNumber/:max',
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

// this endpoint will show a form I can use to add foods
app.get('/foodForm', function(req, res) {
  res.render('foodForm');
});

// this handles the posted data from the form and creates a new food item
app.post('/addFood', function(req, res) {
  // get the food item details from the posted body data
  let foodItem = req.body;
  // set the id for this item (this is not important in the future, it just needs to be here for now)
  foodItem.id = foods.length;
  // store the food item in our array of foods
  foods.push(foodItem);

  res.send('Yay! You added a food item.');
});

// make express listen on port 3000
app.listen(3000);
