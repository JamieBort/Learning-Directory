// declarations
const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
const validator = require('express-validator');
const bodyParser = require('body-parser');
const app = express();
const usernameDb = require('./users');


app.engine('handlebars', handlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(
  session({
    secret: 'this is a secret',
    resave: false,
    saveUninitialized: true
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(validator());

app.use(express.static('public'));

app.get('/', (req, res) => {
  if (!req.session.username) {
    return res.redirect('/login');
  }
  res.render('main', {
    username: req.session.username
  });
});

app.get('/login', (req, res) => {
  console.log(req.session);
  res.render('loginform');
});

app.post('/login', (req, res) => {
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password please!').notEmpty();

  let errors = req.validationErrors();
  if (errors) {
    console.log("validation errors: ", errors);
    return res.render('loginform', {
      errors: errors
    });
  }

  let users = usernameDb.filter((userCheck) => {
    return userCheck.username === req.body.username;
  });

  if (users.length === 0) {
    errors = [{msg:"That username is not registered, please try again"}];
    res.render('loginform', {
      errors: errors
    });
    return;
  }

  let user = users[0];

  //if the passwords match direct to the home page
  if (user.password === req.body.password) {
    req.session.username = user.username;
    res.redirect('/');
  } else {
    errors = [{msg: 'Password did not match user.'}];
    res.render('loginform', {
      errors: errors
    });
  }
});









app.listen(3000, () => console.log('Listening on port 3000!'));
