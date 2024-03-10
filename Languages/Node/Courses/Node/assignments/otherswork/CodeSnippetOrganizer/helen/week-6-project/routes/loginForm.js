const express = require('express');
const routes = express.Router();
const User = require('../models/login');
const Snippet = require('../models/snippets')
const flash = require('express-flash-messages');
const session = require('express-session');
const bodyParser = require('body-parser');

// require stuff for passport======================
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

routes.use(
  session({
    secret: 'keyboard kitten',
    resave: false,
    saveUninitialized: true
  })
);

// connect passport to express boilerplate
routes.use(passport.initialize());
routes.use(passport.session());
routes.use(flash());

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended: false}));

// const requireLogin = (req, res, next) => {
//   if (req.user) {
//     next();
//   } else {
//     res.redirect('/login');
//   }
// };

// configure passport
passport.use(
  new LocalStrategy(function(username, password, done) {
    console.log('LocalStrategy', username, password);
    User.authenticate(username, password)
      // success!!
      .then(user => {
        if (user) {
          done(null, user);
        } else {
          done(null, null, { message: 'There was no user with this username and password.' });
        }
      })
      // there was a problem
      .catch(err => done(err));
  })
);

// store the user's id in the session
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// get the user from the session based on the id
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

//login page====================================================================
// local login form
routes.get('/login', (req, res) => {
  res.render('login', { failed: req.query.failed });
});

// endpoint for local login sumbit
routes.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?failed=true',
    failureFlash: true
  })
);

//register page=================================================================
routes.get('/signup', (req, res) => {
  res.render('register');
});

routes.post('/signin', (req, res) => {
  let user = new User(req.body);
  user.provider = 'local';
  user.setPassword(req.body.password);

  user
    .save()
    // if good...
    .then(() => res.redirect('/'))
    // if bad...
    .catch(err => console.log(err));
});

module.exports = routes;
