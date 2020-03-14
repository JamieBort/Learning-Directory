const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');

const fs = require('fs');
const app = express()

app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.get("/", function (req, res) {
  //everything we get is on the homepage, we define each key value pair with the dataset listed here, and we are selecting the homepage
  res.render('home', {
    //render the view of home
    //this is the data source
    data: info,
    doneList: completed
  })
});

const info = [];
const completed = [];

app.post("/", function(req, res){
  let todoItem = req.body.todoItem
  info.push(todoItem);
  console.log(todoItem);
  console.log(info);
  res.redirect("/")
  // res.redirect('http://google.com')
});


// app.get('/', function(req, res){
//   res.render('home', {data: completed})
// });
//
app.get("/done/:index", function(req, res){

  //we are just getting from a new page for the brief moment that runs these parameters

  let done = info.splice(req.params.index,1);
//splice separates each individual peice of the array and takes starting index, how many to remove, and what to replace it with

  completed.push(done);

  //here we are pushing to our empty array and using the done (as listed in our dataset (inital get))
  console.log(completed);
  res.redirect("/");
  //since we just used the route for this parameter process, we want to redirect to the homepage and display all info after
  //using :/index and /done, was just a peice of the process. @ index is the ref in the view

});




app.use(express.static('public'));


app.listen(3000);

console.log("listening on 3000");
