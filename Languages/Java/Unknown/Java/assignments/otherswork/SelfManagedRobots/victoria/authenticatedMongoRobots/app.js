//PACKAGES
const express = require('express');
const app = express();
let url = 'mongodb://localhost:27017/robots';
const handlebars = require('express-handlebars');
const robotRoutes = require('./routes/robots');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('express-flash-messages');
const Robot = require('./models/robot');
const bodyParser = require('body-parser');

//BOILERPLATE

// for passport
passport.use(
  new LocalStrategy(function(username, password, done) {
    console.log('LocalStrategy', username, password);
    Robot.authenticate(username, password)
      // success!!
      .then(user => {
        if (user) {
          done(null, user);
        } else {
          done(null, null, { message: 'There was no user with this email and password.' });
        }
      })
      // there was a problem
      .catch(err => done(err));
  })
);

passport.serializeUser(function(user, done) {
    done(null, user);
    //done(null, user.username);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

//tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//for handlebars-express
app.engine('handlebars', handlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

//for express
app.use(express.static('public'));

//for session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));

//for passport
app.use(passport.initialize());

//for passport session
app.use(passport.session());

//for flash
app.use(flash());

//ROUTES

// local login form
app.get('/login', (req, res) => {
  res.render('loginForm', { failed: req.query.failed });
});

// endpoint for local login sumbit
app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?failed=true',
    failureFlash: true
  })
);

app.get('/register', (req, res) => {
  res.render('registerForm');
});

app.post('/register', (req, res) => {
  let robot = new Robot(req.body);
  robot.provider = 'local';
  robot.setPassword(req.body.password);

  robot
    .save()
    // if good...
    .then(() => res.redirect('/'))
    // if bad...
    .catch(err => console.log(err));
});

app.use('/', robotRoutes);

//LISTEN
mongoose.connect(url, { useMongoClient: true })
.then(() => {
  app.listen(3000, function() {
    console.log('You started the application!');
  });
});
