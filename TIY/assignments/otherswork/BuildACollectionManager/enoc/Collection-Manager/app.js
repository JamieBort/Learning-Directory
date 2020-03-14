const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
// mongoose. not a mammal
const mongoose = require('mongoose');
// bluebird is a promise library. checkout bluebirdjs.org
const bluebird = require('bluebird');
// set mongoose's primise library to be bluebird
mongoose.Promise = bluebird;

// create express app
const app = express();

// tell express to use handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(express.static('public'));

//tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use my routes
app.use('/', routes);

mongoose
  // connect to mongo via mongoose
  .connect('mongodb://localhost:27017/newdb', { useMongoClient: true })
  // now we can do whatever we want with mongoose.
  // configure session support middleware with express-session
  .then(() => app.listen(3000, () => console.log('ready to roll!!')));
