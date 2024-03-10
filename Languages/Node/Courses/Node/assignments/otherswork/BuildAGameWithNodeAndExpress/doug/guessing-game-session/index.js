const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');

// create express app
const app = express();

// tell express to use handlebars
app.engine('handlebars', exphbs());
app.set('views', './views');
app.set('view engine', 'handlebars');

// tell express how to serve static files
app.use(express.static('public'));

//tell express to use the bodyParser middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// session
app.use(
  session({
    secret: 'keyboard kitten',
    resave: false,
    saveUninitialized: true
  })
);

// my endpoints
app.get('/', (req, res) => {
  // create a random number in the session
  req.session.numberToGuess = Math.floor(Math.random() * 100);

  console.log(req.session.numberToGuess);

  // record the number of guesses left (of 5)
  req.session.attemptsRemaining = 5;

  return res.render('guess', { attemptsRemaining: req.session.attemptsRemaining });
});

app.post('/guess', (req, res) => {
  let result = '';

  // check to see if the guess matches the number to guess
  if (parseInt(req.body.guess) === req.session.numberToGuess) {
    return res.redirect('/done?won=true');
  } else if (req.body.guess > req.session.numberToGuess) {
    // tell the user the guess is too high
    result = 'Too high';
  } else if (req.body.guess < req.session.numberToGuess) {
    // tell the user the guess is too low
    result = 'Too low';
  }

  // decrement the number of guesses remaining
  req.session.attemptsRemaining--;

  // do I still have turns left?
  if (req.session.attemptsRemaining) {
    return res.render('guess', {
      attemptsRemaining: req.session.attemptsRemaining,
      feedback: result
    });
  } else {
    return res.redirect('/done');
  }
});

app.get('/done', (req, res) => {
  // did the user win?
  // show results
  console.log(req.query.won);
  return res.render('done', { won: req.query.won });
});

// start express
app.listen(3000, () => console.log('ready to roll!!'));
