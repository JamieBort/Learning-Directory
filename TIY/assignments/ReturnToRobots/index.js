// Jamie's file

// set up packages

const express = require('express');
const app = express();
// const fs = require('fs'); // Allows you to read, create, update, delete, and rename. All fs methods return promises if the callback isn't passed.
const morgan = require('morgan'); // HTTP request logger middleware for node.js
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// handlebars or mustache?









// const session = require('express-session'); // Used with cookies. So probably not needed.

// set up engine

// set up app.use

// declare variables

// export?

// app.get


app.get('/', function (req, res) {
    res.render('home');
});


// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (request, respond) {
//   respond.send('hello world')
// })

// app.get('/', function (req, res) {
//   res.send('root')
// })


// app.get('/about', function (req, res) {
//   res.send('about')
// })


// app.listen
app.listen(3000, function(){
  console.log('It was a success!');
  console.log('listening on port 3000');
});
