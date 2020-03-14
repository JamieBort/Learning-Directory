// =================Packages=================

const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js')
const app = express();
// const fs = require('fs');

// ============Express app being used============

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home', {
    users: data.users
  })
});

// ===========Retrieving data from data.js=========

app.get('/users/:robotName', function(req, res) {
  let username = req.params.robotName;
  let robot_item = null;

  for (let i = 0; i < data.users.length; i++) {
    let item = data.users[i];
    if (item.username === username) {
      robot_item = item;
      break;
    }
  }

// ============Error Message and Console.log==============

if (robot_item === null) {
    req.status(404).send('User not found');
    return;
  }

  res.render('Poof!', robot_item);
});

app.listen(3000, function() {
  console.log('App is running!');
});
