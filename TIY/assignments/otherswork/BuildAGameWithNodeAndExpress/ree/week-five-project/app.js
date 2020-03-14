const express = require('express');
const expressHandlebars = require('express-handlebars');
const fs = require('fs');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split('\n');

const app = express();

app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(
  session({
    secret: 'stoney boy',
    resave: false,
    saveUninitialized: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(expressValidator());



app.use((req, res, next) => {

  if (!req.session.mysteryWord) {

    req.session.mysteryWord = words[Math.floor(Math.random() * words.length)];

    req.session.word = (req.session.mysteryWord.toLowerCase());

    req.session.wordLength = req.session.mysteryWord.length;

    req.session.turns = 8;

    req.session.blanks = [];

    for (let i = 0; i < req.session.wordLength; i++) {
      req.session.blanks.push('_ ');
    }

    req.session.notInWord = [];
  };

  console.log('word array: ', req.session.word);
  console.log('blanks array: ', req.session.blanks);


  next();

});

app.get('/', (req, res) => {

  res.render('index', {

    word: req.session.blanks,
    guesses: req.session.notInWord,
    turns: req.session.turns

  });

});

app.get('/guesses', function(req, res) {

  res.render('noTurns')
});

app.get('/winner', function(req, res) {
  res.render('win')
});

app.post('/guesses', (req, res) => {

  let guessedLetter = req.body.guess;
  console.log('guessedLetter: ', guessedLetter);

  for (let i = 0; i < req.session.word.length; i++) {
    if (guessedLetter === req.session.word[i]) {
      console.log('indexed letter: ', req.session.word.charAt(i));

      req.session.blanks.splice(i, 1, guessedLetter).join(" ");


    };
  };

  if (!req.session.word.includes(guessedLetter)) {
    req.session.notInWord.push(guessedLetter)
    req.session.turns--
      console.log("There are no " + guessedLetter + "'s... Guess again!")
    console.log(req.session.notInWord);
  };

  if (req.session.turns === 0) {
    res.redirect('/guesses');
  }

  if (req.session.blanks.join("") === req.session.word) {
    res.redirect('/winner');
    console.log(req.session.blanks.join(""));

  }

  res.redirect('/');
});

app.listen(3000, () => {

  console.log("app is running")
});
