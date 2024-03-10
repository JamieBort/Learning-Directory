const express = require('express');
const mustacheExpress = require('mustache-express');
const moment = require('moment');
const fs = require('fs');
const app = express();

// tell express to use mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// tell express how to serve static files
app.use(express.static('public'));

// configure the / path
app.get('/', function(req, res) {
  fs.readdir('./', function(err, files) {
    res.render('home', {
      formattedDate: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
      fruits: files
    });
  });
});

// show some food
app.get('/food/:fruit', function(req, res) {
  //res.send('<h1>Apple</h1><a href="/">home</a>');
  res.render('fruit', {
    fruit: req.params.fruit
  });
});

// make express listen on port 3000
app.listen(3000);
