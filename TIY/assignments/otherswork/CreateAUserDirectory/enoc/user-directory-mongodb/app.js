const express = require('express');
const db = require('./db');
const exphbs = require('express-handlebars');
const rutas = require('./routers/robots');
const app = express();

// connection URL
const url = 'mongodb://localhost:27017/newdb';


// tell express to use handlebars
app.engine('handlebars', exphbs());
app.set('views', './views');
app.set('view engine', 'handlebars');
;

app.use(express.static('public'));

// add the routes
app.use('/', rutas);

//start app
db.connect(url, (err, conection) => {
  if (!err)
    console.log('connected to Mongo.');


    app.listen(3000,() =>  console.log('running'));

});
