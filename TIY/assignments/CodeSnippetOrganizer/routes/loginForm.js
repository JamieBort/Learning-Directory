// define pacakges

// what does this do?
// documentation?
// how to install?
const express = require('express');

// what does this do?
// documentation?
// how to install?
const routes = express.Router();
const User = require('../models/login');

// what does this do?
// documentation?
// how to install?
const Snippet = require('../models/snippets');

// what does this do?
// documentation?
// how to install?
const flash = require('express-flash-messages');

// what does this do?
// documentation?
// how to install?
const session = require('express-session');

// what does this do?
// documentation?
// how to install?
const bodyParser = require('body-parser');

// what does this do?
// npm install passport
const passport = require('passport');

// what does this do?
// npm install passport-local
const LocalStrategy = require('passport-local').Strategy;

// routes.use
routes.use(
  session({
    secret: 'password',
    resave: false,
    saveUninitialized: true
  })
);

// connect passport to express boilerplate
routes.use(passport.initialize());
routes.use(passport.session());
routes.use(flash());
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended:false}));

// configure passport
passport.use(
  new LocalStrategy(function(username, password, done) {
    console.log('LocalStrategy', username, password);
  User.authenticate(username, password)
.then(user => {
  if (user) {
    done(null, user);
  } else {
    done(null, null, { message: 'This username and password is not associated with a user.' });
  }
})
.catch(err => done(err));
  })
);

// store user's id in session
passport.serializeUser((user,done) => {
  done(null, user._id);
});

// obtain user from session base
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

// login page
routes.get('/login', (req, res) => {
  res.render('login', {failed: req.query.failed});
});

// endpoint for local login submit
routes.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?failed=true',
    failureFlash: true
  })
);

// register page
// waht's going on here?
routes.get('/signup', (reg, res) => {
  res.render('register');
});

// waht's going on here?
routes.post('/signin', (req, res) => {
  let user = new User(req.body);
  user.provider = 'local';
  user.setPassword(req.body.password);

// what's going on here?
  user
  .save()
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));
});

// export routes
module.exports = routes;
