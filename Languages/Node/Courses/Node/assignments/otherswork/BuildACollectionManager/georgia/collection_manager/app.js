//===Packages===//

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const routes = require('./routes/routes');

mongoose.Promise = bluebird;

// ==== BoilerPlate ==== //

const app = express();

app.use(express.static('public'));

// ==== Tell Express to use Handlebars ==== //

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('views', './views');
app.set('view engine', 'handlebars');

// ==== Tell Express to use the bodyParser middleware to parse form data === //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// === Routes === //
app.use('/', routes);

mongoose

  .connect('mongodb://localhost:27017/artwork', { useMongoClient: true })

  .then(() => app.listen(3000, () => console.log('App is running!!!')));
