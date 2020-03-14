// =====REQUIRE PACKAGES ==========
const express = require('express');
const path = require('path');
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

//===== BOILERPLATE TEMPLATES ======
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//FOR BODY PARSER ======================
app.use(bodyParser());

//======= FOR EXPRESS ====================
//use the term "Public" because it refers to "public" folder you created in your project folder
app.use(express.static("Public"));

//Create ARRAY for list items to be pushed to ====
const toDoItem = [];
const completedItem = [];

//LISTENING ON ROOT & CREATE PATH TO ToDo (PAGE RENDERING) ========
app.get('/', function(req, res) {
  // res.send('This will be printed in browser');
  res.render("ToDo")
});

//For body-parser Turn it "ON" by the variable name ================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/ToDo', function(req, res) {
  let toDoItem = req.body;
  // res.send(html);
  res.render("ToDo", {ToDo: "item"})
});

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
