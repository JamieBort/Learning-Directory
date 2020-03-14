const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express();

// =======================================

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

//========================================

const todosArray = [];
const doneArray = [];
 let lastID = 0;
// =======================================

app.get("/", function (req, res) {
  res.render('home', {
     todos: todosArray,
     done: doneArray
   });
});

// =======================================

app.post("/", function(req, res) {

  lastID += 1

  todosArray.push({
    id: lastID,
    text: req.body.item
  });
  res.redirect('/');
})

// =======================================

// app.post("/:id", function (req, res) {

//   let id = req.params.id;

//   holding = todosArray.filter(function(li) {
//     return li.id == id;
//   });

//   holding.forEach(function(li) {

//     let index = todosArray.indexOf(li);
//     if (index != -1){
//       todosArray.splice(index, 1);
//     }

//     doneArray.push(li);
//   })

//     res.redirect('/');
// });

app.listen(3000, function() {
  console.log('It worked!');
});
