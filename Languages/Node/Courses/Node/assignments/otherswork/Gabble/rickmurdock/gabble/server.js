const express = require("express");;
const expressValidator = require("express-validator");
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const session = require("express-session");
const sessionConfig = require("./sessionConfig")
const port = process.env.PORT || 8000;
const models = require("./models");
const indexRouter = require('./routes/indexRoutes');
const loginRouter = require('./routes/loginRoutes');
const logoutRouter = require('./routes/logoutRoutes');
const signupRouter = require('./routes/signupRoutes');
const likesRouter = require('./routes/likesRoutes');
const creategabRouter = require('./routes/creategabRoutes');
const mygabsRouter = require('./routes/mygabsRoutes');
const app = express();

// RENDER ENGINE
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache")

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.static("views"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(session(sessionConfig));

// ROUTES
app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/signup', signupRouter);
app.use('/likes', likesRouter);
app.use('/mygabs', mygabsRouter);
app.use('/creategab', creategabRouter);

// LISTENER
app.listen(port, function() {
  console.log('Gabble server is running on port: ', port);
});
