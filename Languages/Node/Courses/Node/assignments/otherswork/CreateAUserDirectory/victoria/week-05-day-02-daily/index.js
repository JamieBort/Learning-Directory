const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data.js')
const app = express();

app.engine ('mustache', mustacheExpress());
app.set ('views', './views');
app.set ('view engine', 'mustache');

app.use (express.static('public'));

app.get('/', function(req, res) {
  res.render('home', {users:data.users})
});

app.get('/users/:robotName', function (req, res) {
  // We need to find items in the array that matches
  // what has been 'caught' in the url
  let username = req.params.robotName; // === 'hjuaz0';
  let robot_item = null;

  // We are trying to find and object who's username
  // property equals what was in the url
  for (let i = 0; i < data.users.length; i++) {
    let item = data.users[i];
    if (item.username === username) {
      robot_item = item;
      break;
    }
  }

  // Return a 404 if the robot does not exist in our array.
  if (robot_item === null) {
    req.status(404).send('No user with that name');
    return;
  }

  res.render('goof', robot_item);
});

app.listen(3000, function() {
  console.log('You started the application!');
});
