// from: https://newline.theironyard.com/cohorts/15/courses/10/objective_lessons/157#form_validation
// body-parser implementation

// require dependencies
var express = require('express');
var bodyParser = require('body-parser');

// create app
var app = express();

// set app to use bodyParser() middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res){
    // set action to '/'
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
//   app.listen(3000);

// below is a moidification of the code from the notes. I found it here: https://stackoverflow.com/questions/18008620/node-js-express-js-app-only-works-on-port-3000
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),
  function(){
    console.log("Express server listening on port " + app.get('port'));
});