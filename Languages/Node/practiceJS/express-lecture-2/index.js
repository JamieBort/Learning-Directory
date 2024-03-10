// we need an express
// we need body persar
// we need body mustache
// we need body persar mustache-express

// npm init creates package.json
// load modules

const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const fs = require('fs');
const playerzz = require('./players');
const app = express();

// tell express to use mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// tell express how to serve static files
// app.use(express.static('public'));

// configure the / path
app.get('/form', function(req, res) {

  // res.send('hello, good looking');
  res.render('form');
});

// configure the / path
app.get('/', function(req, res) {
  res.render('players', {
    squiggle: playerzz
  })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.post('/addPlayer', function(req, res) {
  let playerPerson = req.body;
  // console.log(playerPerson);
  playerzz.push(playerPerson);
  res.send('you added a player');
})

// make express listen on port 3000
app.listen(3000, function() {
  console.log("App is runing");
});
