// define our packages

// npm install express
const express = require('express');

// how to install?
//documentation
// what does this do?
const exphbs = require('express-handlebars');

// how to install?
//documentation
// what does this do?
const bodyParser = require('body-parser');

// how to install?
//documentation
// what does this do?
const session = require('express-session');

// how to install?
//documentation
// what does this do?
// npm install mongoose
const mongoose = require('mongoose');

// third party promise library
// documentation https://www.npmjs.com/package/bluebird
// and http://bluebirdjs.com/
// npm install bluebird
const bluebird = require('bluebird');
mongoose.Promise = bluebird; // what is happening here?

// routes ==== add comentary
const createRoutes = require('./routes/createRoutes');

const loginRoutes = require('./routes/loginForm');

// models ==== add comentary
const User = require('./models/login');

const Snippet = require('./models/snippets');

// express app  ==== add comentary
const app = express();

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('views', './views');
app.set('view engine', 'handlebars');

// ==== add comentary
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(
  session({
    secret: 'password',
    resave: false,
    saveUninitialized: true
  })
);

// URL connection
// localhost:27017 is the server we are connecting to
// newdb is the database we wish to connect to
let url = 'mongodb://localhost:27017/newdb';

// what is this and why?
app.use('/', loginRoutes);

// add the snippet
// what is this and why?
app.use('/addSnippet', createRoutes);

const requireLogin = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    console.log('You are not logged in. You are being redirected to the login page.')
    res.redirect('/login');
  }
};

// ================= review this with lexi, doug, or kaitlin =================
// how is the then and catch working here?
app.get('/', requireLogin, function(req, res) {
  Snippet.find()
  .then((snippets) => {
    res.render('home', {user: req.user,
    snippets: snippets})
  })
  .catch(err => res.send('nope'))
});

// delete the snippet
app.get('/deleteSnippet', (req, res) => {
  Snippet.findById(req.query.id)
  .remove()
  .then(() => res.redirect('/'));
});

// logout
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});

// connect to mongo via mongoose
mongoose
  .connect('mongodb://localhost:27017/newdb', { useMongoClient: true })
  .then(() => app.listen(3000, () => console.log('ready to roll on port 3000!!')));
