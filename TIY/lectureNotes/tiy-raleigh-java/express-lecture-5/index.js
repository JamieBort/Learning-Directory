const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const moment = require('moment');
const morgan = require('morgan');
const expressValidator = require('express-validator');
const session = require('express-session');
// const foods = require('./food');
const fs = require('fs');
const app = express();

// require our food router
const foodRoutes = require('./routes/food');
const numberRoutes = require('./routes/number');
const rootRoutes = require('./routes/root');

// tell express to use handlebars
app.engine('handlebars', exphbs());
app.set('views', './views');
app.set('view engine', 'handlebars');

// configure session support middleware with express-session
app.use(
  session({
    secret: 'keyboard kitten', // this is a password. make it unique
    resave: false, // don't resave the session into memory if it hasn't changed
    saveUninitialized: true // always create a session, even if we're not storing anything in it.
  })
);

// setup morgan for logging requests
// put this above other stuff in the hope that it will log static resources
app.use(morgan('dev'));

// tell express how to serve static files
app.use(express.static('public'));

//tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// add express-validator middleware. This adds the checkBody() and presumably
// other methods to the req.
app.use(expressValidator());

// add our root routes
app.use('/', rootRoutes);

// add our food-related routes
app.use('/food', foodRoutes);

// add our number-related routes
app.use('/number', numberRoutes);

// make express listen on port 3000
app.listen(3000);
