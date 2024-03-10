const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();


// run mustache engine
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

// serve static files
app.use(express.static('public'));

// run body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// todos array
let todos = [];

// completed array
let completed = [];

// configure root path
app.get("/", function(req, res) {
  res.render('home', {
    todos: todos,
    completed: completed
  });
});

// post new data into array
app.post("/", function(req, res) {
  console.log(req.body);
  todos.push(req.body.todo);
  res.redirect('/');
});


// separate post event
app.post("/completed", function(req, res) {
  console.log(req.body);
  for (var i = 0; i < todos.length; i++) {
    if (req.body.completed === todos[i]) {
      completed.push(todos[i]);
      todos.splice(i, 1);
    }

  }
  res.redirect('/');
});


// listen for port
app.listen(3000, function(req, res) {
  console.log('Successfully started application!');
})
