//boiler plate================================
const express = require('express');
const routes = express.Router();
// const db = require('../db');
const User = require('../models/login');
const flash = require('express-flash-messages');
const session = require('express-session');
const bodyParser = require('body-parser');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

routes.use(
  session({
    secret: 'mouse',
    resave: false,
    saveUninitialized: true
  })
);


routes.use(passport.initialize());
routes.use(passport.session());
routes.use(flash());

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended: false}))

// configure passport
passport.use(
  new LocalStrategy(function(email, password, done) {
    console.log('LocalStrategy', email, password);
    User.authenticate(email, password)
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

// store the user's id in the session
passport.serializeUser((user, done) => {
  console.log('serializeUser');
  done(null, user.id);
});

// get the user from the session based on the id
passport.deserializeUser((id, done) => {
  console.log('deserializeUser');
  User.findById(id).then(user => done(null, user));
});


const requireLogin = (req, res, next) => {
  console.log('req.user', req.user);
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

//home==============================
routes.get('/', requireLogin, (req, res) => {
  User.find()

  .then(data => res.render('home', { data: data, user: request.user}))

  .catch(err => res.send('nope'))

  })


//login================================
routes.get('/login', (req, res) => {
  res.render('login', {failed: req.query.failed})
})

routes.post(
  '/login',
  passport.authenticate('local', {
    succesRedirect: '/',
    failureRedirect: '/login?failed=true',
    failureFlash: true
  })
)

//looking===============================
routes.post('/looking', (req, res) => {
  User.find({ job: null })
  .then(data => res.render('looking', {data: data}))
  .catch(err => res.send('error'));
});

//working===================================
routes.post('/working', (req, res) => {

  User.find({ job: {$nin: [null] }})
  .then(data => res.render('looking', {data: data}))
  .catch(err => res.send('error'))

})

//individual=================================
routes.get('/users/:user', function(req, res){
  // let coll = db.get().collection('userDirectory');
  let person = req.params.user;

  User.find({username: username})
  .then(data => res.render('login', {data: data}))
  .catch(err => res.send('error'))
  // coll.find({username: person}).toArray((err, userDirectory) => {
  //   res.render('user', {users: userDirectory})
  // })
});


//register====================
routes.get('/signup', (req, res) => {
  res.render('signup');
});

routes.post('/signup', (req, res) => {
  let user = new User(req.body);
  user.provider = 'local';
  user.setPassword(req.body.password);

  user
    .save()
    // if good...
    .then(() => res.redirect('/'))
    // if bad...
    .catch(err => console.log(err));
})





module.exports = routes;
