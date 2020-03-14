// ===========PACKAGES===========

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const app = express();

// =========BOILER PLATE===========

// for handlebars
app.engine('handlebars', exphbs());
app.set('views', './views');
app.set('view engine', 'handlebars');

// for express-session
app.use(
  session({
    //in the future this is not how to store passwords
    secret: 'CROWpoe',
    resave: false, // doesn't save without changes
    saveUninitialized: true // creates a session
  })
);

// for express
app.use(express.static('public'));

//for bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


// for express-validator
app.use(expressValidator());

// ======= SUPER DUPER SECURE DATABASE =====

let topsecret = [{
    username: 'Doug',
    password: 'rattleballs'
  },
  {
    username: 'Lexi',
    password: 'bubblegum'
  },
  {
    username: 'Kaitlin',
    password: 'lemonhope'
  }
];

// ============= ENDPOINTS ===============

// path to home
app.get('/', function(req, res) {
  //if the user's info is not stored redirect
  if (!req.session.victim) {
    res.redirect('/login')
    //if the user is recognized render the home page
  } else {
    res.render('home', {
      username: req.session.victim
    });
  }
});

// path to login
app.get('/login', function(req, res) {
  res.render('login')
});

// send information after it is submitted
app.post('/login', function(req, res) {
  let user = req.body;

  // // ============== VALIDATION ================
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password please!').notEmpty();

  let errors = req.validationErrors();

  if (errors) {
    //if there is an error print it
    res.render('login', {
      errors: errors
    });
  } else {
    //otherwise
    let users = topsecret.filter(function(userCheck) {
      return userCheck.username === req.body.username;
    });

    //if that user does not exist return an error on the login page
    if (users.length === 0) {
      let not_a_user = "User not found. Please create an account."
      res.render('login', {
        something: not_a_user
      });
      return;
    }

    let user = users[0];

    //if the passwords match direct to the home page
    if (user.password === req.body.password) {
      req.session.victim = user.username;
      res.redirect('/');
    } else {
        let not_ur_password = "Donk."
        res.render('login', {
          something: not_ur_password
        });
      }
  }
});



// ============== LISTEN =================
app.listen(3000);
