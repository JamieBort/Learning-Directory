The controller facilitates communication between models and views and handles user input.

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const rootRoutes = require('./routes/root');

// tell express to use handlebars
app.engine('handlebars', exphbs());
app.set('views', './views');
app.set('view engine', 'handlebars');

// tell express how to serve static files
app.use(express.static('public'));

// use our router
app.use('/', rootRoutes);

app.listen(3000, () => console.log('started the app'));
