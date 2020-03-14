// const db = require('./db');
const express = require('express');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routers/home');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const app = express();




app.use(express.static('public'));

let url = 'mongodb://localhost:27017/newdb';

app.engine('handlebars', exphbs());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(
  session({
    secret: 'keyboard kitten',
    resave: false,
    saveUninitialized: true
  })
);


//tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// this middleware function will check to see if we have a user in the session.
// if not, we redirect to the login form.

// app.get('/login')
app.use('/', homeRoutes);


mongoose
// connect to mongo via mongoose
  .connect('mongodb://localhost:27017/bcryptExample', { useMongoClient: true })
  // now we can do whatever we want with mongoose.
  // configure session support middleware with express-session
  .then(() => app.listen(3000, () => console.log('ready to roll!!')));
