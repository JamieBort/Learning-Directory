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

  lastID += 1;

  todosArray.push({
    id4: lastID, // Corresponds to {{id4}} in home.mustache
    text2: req.body.item // Corresponds to {{text2}} in home.mustache
  });
  console.log(todosArray);
  res.redirect('/');
})

// =======================================

app.post("/:id3", function (req, res) {

  let id2 = req.params.id3;

  holding = todosArray.filter(function(li) {
    return li.id4 == id2;
  });

  holding.forEach(function(li) {

    let index = todosArray.indexOf(li);
    if (index != -1){
      todosArray.splice(index, 1);
    }

    doneArray.push(li);

    console.log("third" + `holding`);
  })
console.log(doneArray);
    res.redirect('/');
});

app.listen(3000, function() {
  console.log('It worked!');
});
