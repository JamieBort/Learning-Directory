//REQUIRE PACKAGES
const express = require('express');
const handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash-messages');
// const routes = require('./routes/routes');
const routes = express.Router();
const mongoose = require('mongoose');
const bluebird = require('bluebird');
// set mongoose's promise library to be bluebird
mongoose.Promise = bluebird;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userSchemaFile = require('./models/userSchemaFile');

//configure passport
passport.use(
  new LocalStrategy(function(email, password, done) {
    console.log('LocalStrategy', email, password);
    userSchemaFile.authenticate(email, password)
      // success!!
      .then(userSchemaFile => {
        if (userSchemaFile) {
          done(null, userSchemaFile);
        } else {
          done(null, null, { message: 'There was no user with this email and password.' });
        }
      })
      // there was a problem
      .catch(err => done(err));
  })
);

// store the user's id in the session
passport.serializeUser((userSchemaFile, done) => {
  console.log('serializeUser');
  done(null, userSchemaFile.id);
});

// get the user from the session based on the id
passport.deserializeUser((id, done) => {
  console.log('deserializeUser');
  User.findById(id).then(allUsers => done(null, allUsers));
});

//BOILERPLATE

// Create Express app
const app = express();

//for express to use the public folder with css sheet
app.use(express.static('public'));

//for handlebars-express - tells Express to use Handlebars
app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

//tell express to use session
app.use(
  session({
    secret: 'i love pong',
    resave: false,
    saveUninitialized: true
  })
);

// connect passport to express boilerplate
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//ROUTES
app.use('/', routes);

// this middleware function will check to see if we have a user in the session based off the data in our MongoDB.
// if not, we redirect to the login form.
const requireLogin = (req, res, next) => {
  console.log('req.userSchemaFile', req.userSchemaFile);
  if (req.userSchemaFile) {
    next();
  } else {
    res.redirect('/loginFile');
  }
};

app.get('/', requireLogin, (req, res) => {
  res.render('loginFile', { allUsers: req.allUsers });
});

// local login form (URL localhost:3000/loginFile will render the HTML loginFile.handlebars content onto browser page)
app.get('/loginFile', (req, res) => {
  //console.log('errors:', res.locals.getMessages());
  res.render('loginFile', { failed: req.query.failed });
});

// endpoint for local loginFile when user clicks "Login" button
app.post(
  '/loginFile',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/loginFile?failed=true',
    failureFlash: true
  })
);

//Create route to signupFile (Page will render the HTML content from signupFile.handlebars file. Site URL will be localhost:3000/signupFile)
app.get('/signupFile', (req, res) => {
  res.render('signupFile');
});

app.post('/signupFile', (req, res) => {
  let user = new User(req.body);
  user.provider = 'local';
  user.setPassword(req.body.password);

  allUsers
  .save()
  // if good...
  .then(() => res.redirect('/'))
  // if bad...
  .catch(err => console.log(err));
});

// // log out!!!!!
// app.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });







//APP
mongoose
  // connect to mongo via mongoose. 'robotsDB' is referring to the database already created in Mongo'
  .connect('mongodb://localhost:27017/robotsDB', { useMongoClient: true })
  // now we can do whatever we want with mongoose.
  // configure session support middleware with express-session
  .then(() => app.listen(3000, () => console.log('ready to roll!!')));
