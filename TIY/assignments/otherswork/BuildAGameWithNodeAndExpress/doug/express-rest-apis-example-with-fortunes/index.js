const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

// require my fortunes service
const fortunes = require('./service/fortunes');

//require mongoose and bluebird
const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

//require the robots model
const Robot = require('./models/robots.js');

// create express app
const app = express();

// tell express to use handlebars
app.engine('handlebars', exphbs());
app.set('views', './views');
app.set('view engine', 'handlebars');

// tell express how to serve static files
app.use(express.static('public'));

//tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// my endpoints
app.get('/', (req, res) => res.render('fortune'));
app.get('/numbers', (req, res) => res.render('numbers'));
app.get('/directory', (req, res) => res.render('robots'));

// my rest endpoints

// get a random fortune
app.get('/fortunes/random', (req, res) => res.json(fortunes.getRandomFortune()));

// get the lucky numbers
app.get('/luckyNumbers', (req, res) => res.json(fortunes.getLuckyNumbers(req.query.num, req.query.max)));

// get a list of robots
app.get('/robots', (req, res) => {
  let filter = {};

  if (req.query.type === 'employed') {
    filter.job = { $exists: true };
  } else if (req.query.type === 'unemployed') {
    filter.job = null;
  }

  console.log(filter);

  Robot.find(filter).then(robots => res.json(robots));
});

// get a specific robot
app.get('/robots/:username', (req, res) => {
  Robot.findOne({ username: req.params.username }).then(robot => res.json(robot));
});

// start express
mongoose
  .connect('mongodb://localhost:27017/robots', { useMongoClient: true })
  .then(() => app.listen(3000, () => console.log('ready to roll!!')));
