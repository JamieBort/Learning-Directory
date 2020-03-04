// from: https://newline.theironyard.com/cohorts/15/courses/10/objective_lessons/157#form_validation
// bodyparser and express-validator implementation

var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator'); // npm install express-validator --save

// create app
var app = express();

// Set app to use bodyParser()` middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //'extended: false' parses strings and arrays. 'extended: true' parses nested objects

//'expressValidator' must come after 'bodyParser', since data must be parsed first!
app.use(expressValidator());

app.get('/', function(req, res){ // Set 'action' to '/'

// send information
var html = '<form action="/" method="post">' +
'<h1>User Name</h1>' +
'<p>Enter a username</p>' +
'<input type="text" name="user" placeholder="user name" />' +
'<button type="submit">Submit</button>' +
'</form>';
res.send(html);
});

// request/get information
app.post('/', function(req, res){
      //Tell middleware which validators to apply (chain one or more).
    //   req.checkBody("user", "You must enter a username!").notEmpty(); //Call req.checkBody function.
      req.checkBody("user", "You must enter a username!").isEmail().notEmpty(); // the above is commented out because I added '.isEmail()' for practice.
  
      var errors = req.validationErrors(); //Pass inputs to validate.
      if (errors) {
        // Render validation error messages
        var html = errors;
        res.send(html);
      } else { // Receives data from form (action='/')
        var user = req.body.user; // 'req.body' now contains form data.
        var html = '<p>Your user name is: </p>' + user;
        res.send(html);
      }
    });
    
//   app.listen(3000);

// below is a moidification of the code from the notes. I found it here: https://stackoverflow.com/questions/18008620/node-js-express-js-app-only-works-on-port-3000
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),
  function(){
    console.log("Express server listening on port " + app.get('port'));
});