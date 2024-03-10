// When refactoring this consult ben's and kelly's

// ========== Define packages ==========
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const app = express();

// ========== Define templates ==========
// make sure 'handlebars' below matched the second paramenter in the line of code: app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs());
app.set('views', './views');
// make sure 'handlebars' below matched the first paramenter in the line of code: app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// ========== code for express-session ==========

app.use(
  session({
    secret: 'CROWpoe', // this is a password. it is hard coded. in the future this is not how to store passwords.
    resave: false, // since false, this does not save without changes
    saveUninitialized: true // creates a session
  })
);

// ========== tell express how to serve static files ==========
// since I plan on using static files in the public folder
app.use(express.static('public'));

//for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// for express-validator
app.use(expressValidator());

// ========== creating database for usernames and passwords ==========
// this will ideally be located in a database, not in the file at all. and it will be pathed to this file.

let myDatabase = [{
    username: 'Doug',
    password: 'abc'
  },
  {
    username: 'Lexi',
    password: 'def'
  },
  {
    username: 'Kaitlin',
    password: 'ghi'
  }
];

// ========== ENDPOINTS ==========

// path to index
app.get('/', function(req, res) {
  // res.sender("Hello!!!!!!"); displays "Hello!!!!!!" on the / page.
  if (!req.session.victim) {
    res.redirect('/login')
  } else {
    res.render('home', {
      username: req.session.victim
    });
  }
});

// path to login
app.get('/login', function(req, res) {
  // res.render('login'); brings you to login.handlebars. the html in login.handlebars gets rendered
  res.render('login')
});

app.post('/login', function(req, res) {
  let user = req.body;


  // // path to login
  // app.get('/home', function(req, res) {
  //   // res.render('home'); brings you to home.handlebars. the html in home.handlebars gets rendered
  //   res.render('home');


  // ========== validation ==========
  // checking to see if the field is empty
  req.checkBody('username', 'Username is required').notEmpty();
  // checking to see if the field is empty
  req.checkBody('password', 'Password is required').notEmpty();

  let errors = req.validationErrors();
  // if there is an error, print it
  if (errors) {
    res.render('login', {
      errors: errors
    });
  } else {
    // otherwise
    let users = myDatabase.filter(function(userCheck) {
      return userCheck.username === req.body.username; //return userCheck.username === req.sessionsbody.usernames;
    });

    // if the username the person entered does not match a username in the database the do the following below

    // return an error

    if (users.length === 0) {
      let not_a_user = "User not found. Please create an account."
      res.render('login', {
        notAUserMessage: not_a_user
      });
      return;
    }

    let user = users[0];

    // if the passwords match, redirect to the home page
    if (user.password === req.body.password) {
      req.session.victim = user.username;
      res.redirect('/');
    } else {
      let not_ur_password = "That's not correct."
      res.render('login', {
        someting: not_ur_password
      });
    }
  }
});

// ========== make express listen on port 3000 ==========
app.listen(3000, function() {
  // feedback. Is the apprunning?
  console.log("The app is running on http://localhost:3000/");
});
