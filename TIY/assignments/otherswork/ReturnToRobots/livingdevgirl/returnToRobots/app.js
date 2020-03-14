const express = require('express');
const expressHandlebars = require('express-handlebars');
const dataFile = require('./public/data');
const bodyParser = require('body-parser')
const app = express()
let url = 'mongodb://localhost:3000/robotsMongo';

console.log(url)


app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//testforpush
app.use(express.static('public'));


let db = require('./db');;
let connection = url;

exports.connect = function(url, done) {
  if (connection) return done();

  MongoClient.connect(url, function(err, db) {
    if (err) return done(err);
    connection = db;
    done();
  });
};

exports.get = function() {
  console.log(connection)
  return connection;
};

exports.close = function(done) {
  if (connection) {
    connection.close(function(err, result) {
      connection = null;
      state.mode = null;
      done(err);
    });
  }
};

app.get('/', function(req, res){
//for loop if value key is null, target same place and assign it to string "availble for hire" console.log(dataFile)
for (var i = 0; i < dataFile.users.length; i++) {
  if (dataFile.users[i].job === null){
        let userStatus = "looking for work";
        dataFile.users[i].job = "reboot me, i need work!";
        // document.querySelector('.job').style.color = "red";
  }
}
  res.render('home', dataFile)
});


app.get("/:user", function(req, res){
  let robot = req.params.user;
  for (var i = 0; i < dataFile.users.length; i++) {
    if(dataFile.users[i].username === robot){
    res.render('user', dataFile.users[i]);
    }
  }
});

db.connect(url, (err, connection) => {
  if (!err)
    console.log('connected to mongo')});

app.listen(3000);
console.log("listening at 3000");
