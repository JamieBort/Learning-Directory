const express = require('express');
const expressHandlebars = require('express-handlebars');
const dataFile = require('./public/data');
const bodyParser = require('body-parser');
const robots = require('./models/data.json')
const app = express()
const mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/newdb').MongoClient;
mongoose.Promise = require('bluebird');


app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static('public'));

app.get('/', function(req, res){
//for loop if value key is null, target same place and assign it to string "availble for hire" console.log(dataFile)
for (var i = 0; i < dataFile.users.length; i++) {
  if (robots.job === null){
        let userStatus = "looking for work";
      robots.job = "reboot me, i need work!";
        // document.querySelector('.job').style.color = "red";
  }
// console.log(robots.find())
}
  res.render('home', {robots: robots})
});


app.get("/:robot", function(req, res){
  let robot = req.params.robots;
  for (var i = 0; i < dataFile.users.length; i++) {
    if(robots.username === robot){
    res.render('user', {robots: robots});
    }
  }
});


app.listen(3000);
console.log("listening at 3000");
