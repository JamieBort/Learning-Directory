var express = require('express');
var bodyParser = require('body-parser');

// Create app
var app = express();

// Set app to use bodyParser()` middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  // Set 'action' to '/'
  var html = '<form action="/" method="post">' +
             '<h1>User Name</h1>' +
             '<p>Enter your email</p>' +
             '<input type="text" name="email" placeholder="email address" />' +
             '<button type="submit">Submit</button>' +
         '</form>';
  res.send(html);
});

// Receives data from form (action='/')
// 'req.body' now contains form data.
app.post('/', function(req, res){
  var email = req.body.email;
  var html = '<p>Your user name is: </p>' + email;
  res.send(html);
});
app.listen(3000);
