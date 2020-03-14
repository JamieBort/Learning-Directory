const express = require('express');
const handlebars = require('express-handlebars');
const usersRoutes = require('./routes/users');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

const app = express();

app.engine('handlebars', handlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');


app.use(
  session({
    secret: 'V4P3N4710N',
    resave: false,
    saveUninitialized: true
  })
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// serve static files
app.use(express.static('public'));

// router setup
app.use('/', usersRoutes);


mongoose
  .connect('mongodb://localhost:27017/robotsdb', { useMongoClient: true })
  .then(() => app.listen(3000, () => console.log('Successfully started application')));
