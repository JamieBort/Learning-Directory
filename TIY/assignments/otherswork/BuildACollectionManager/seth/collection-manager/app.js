const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const qs = require('qs');
const assert = require('assert');
const routes = require('./routes/routes')

const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

// create express app
const app = express();

// tell express to use handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('views', './views');
app.set('view engine', 'handlebars');

// serve public files
app.use(express.static('public'));

//tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use my routes
app.use('/', routes);

mongoose
  // connect to mongo via mongoose
  .connect('mongodb://localhost:27017/collectionManager', { useMongoClient: true })
  // now we can do whatever we want with mongoose.
  // configure session support middleware with express-session
  .then(() => app.listen(3000, () => console.log("LET'S DO THIS!")));
