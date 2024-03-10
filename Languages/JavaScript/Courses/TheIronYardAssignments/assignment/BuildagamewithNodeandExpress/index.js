// call the various packages

// Writes handlers for requests with different HTTP verbs at different URL paths (routes). Integrates with "view" rendering engines in order to generate responses by inserting data into templates. Sets common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response. Adds additional request processing "middleware" at any point within the request handling pipeline.
// https://www.npmjs.com/package/express
// $ npm install express
const express = require('express');

//Handlebars is a logic-less templating engine that dynamically generates your HTML page. It’s an extension of Mustache with a few additional features. Mustache is fully logic-less but Handlebars adds minimal logic thanks to the use of some helpers (such as if, with, unless, each and more) that we’ll discuss further in this article. As a matter of fact, we can say that Handlebars is a superset of Mustache.
// https://www.npmjs.com/package/express-handlebars
// $ npm install express-handlebars
const exphbs = require('express-handlebars');

// Reads the contents of a file into memory.
// https://www.npmjs.com/package/fs-extra
// $ npm install file-system
const fs = require('fs');

// Node.js body parsing middleware.
// Returns middleware that only parses json.
// https://www.npmjs.com/package/body-parser-json
// $ npm install body-parser
const bodyParser = require('body-parser');

// Used the npm package express-session to set up user authentication.
// Used to store the word the user is trying to guess in a session.
// $ npm install express-session
const session = require('express-session');

// Express middleware for Validator, a library of string validators and sanitizers.
// https://www.npmjs.com/package/express-validator
// $ npm install express-validator
const expressValidator = require('express-validator');


// What does this do?
// See the instruction on the assignemnt. It says:
// "This file exists on your computer already. You will have to read it with Node. The following line will read it and split it into words:"
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split('\n');


// different/additional comments from above?
const app = express();


// call the engine boilerplate
app.engine('handlebars', exphbs({

  // The following is not needed. Read up on what is the significance of it?
  // defaultLayout: 'main'
}));

// What does this do?
app.set('views', './views')
app.set('view engine', 'handlebars');


// call static
// see: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


// call session
// see: https://www.npmjs.com/package/express-session
app.use(session({
  secret: 'my password',
  resave: false,
  saveUninitialized: true,
}));


// call bodyparser
// see: https://www.npmjs.com/package/body-parser
app.use(bodyParser.json());

// This displays the letter that was alredy chosen.
app.use(bodyParser.urlencoded({
  extended: true
}));


// call validator
// NOTE: must come after bodyparser
app.use(expressValidator());

// study this. What happened? What's going on here?
app.use((req, res, next) => {
      if (!req.session.mysteryWord) {
        req.session.mysteryWord = words[Math.floor(Math.random() * words.length)];
        req.session.word = (req.session.mysteryWord.toLowerCase());
        req.session.wordLength = req.session.mysteryWord.length;
        req.session.turns = 8;
        req.session.blanks = [];

        // what did changing this do?
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
          // what is '--'? Find out.
          req.session.turns--
            console.log("There are no " + guessedLetter + "'s... Guess again!")
          console.log(req.session.notInWord);
        };

        if (req.session.turns === 0) {
          res.redirect('/guesses');
        };

        if (req.session.blanks.join("") === req.session.word) {
          res.redirect('/winner');
          console.log(req.session.blanks.join(""));

        }; res.redirect('/');
      });


    // app.listen
    app.listen(3000, function() {
      console.log('\nSuccessfully started express application!');
      console.log('*** Listening on port 3000 ***');
    });
