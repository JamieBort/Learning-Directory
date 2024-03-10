// 1. require packages
// 2. use the boiler plate engine for mustacheExpress
// 3. use exrpress.static
// 4. define variables
// 5. write get
// 6. write post
// 7. write post
// 8. use app.listen(3000....)
// 9. create home.mustache file

// =======================================
// require various packages
const express = require('express'); // npm install express --save
const app = express();
const mustacheExpress = require('mustache-express'); // npm install mustache-express --save
const bodyParser = require('body-parser') // npm install body-parser --save
// About body-parser from: https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express
// To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
// The middleware was a part of Express.js earlier but now you have to install it separately.
// This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request. Install body-parser using NPM as shown below.
// npm install body-parser --save

const expressValidator = require('express-validator'); // npm install express-validator --save

// =======================================
// boilerplate engine
// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

// use express static
app.use(express.static('public')); // from: https://expressjs.com/en/starter/static-files.html

// use body parser
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

// use validator
app.use(expressValidator()); // this line must be immediately after any of the bodyParser middlewares

// The following line of code tells express to look in the public directory for the css file.
app.use(express.static('public'));


// =======================================
// define variables ======================
const todosArray = [];
const doneArray = [];
 let lastID = 0;

 // =======================================
// responses and requests
// get information
app.get('/', function (req, res) {
  res.render('home', {
    data: todosArray,
    doneList: doneArray
    
  });
});

// =======================================
// post todo information
app.post('/', function (req, res) {
  lastID += 1;
  
  todosArray.push({
    id4: lastID, // Corresponds to {{id4}} in home.mustache
    text2: req.body.item // Corresponds to {{text2}} in home.mustache
  });
  console.log(todosArray);
  res.redirect("/");
});

// =======================================
// post done information
app.post("/:id3", function (req, res) {

  let id2 = req.params.id3;

  holding = todosArray.filter(function(li) {
    return li.id4 == id2;
  });

  holding.forEach(function(li) {

    let index = todosArray.indexOf(li);
    if (index != -1){
      todosArray.splice(index, 1);
    }

    doneArray.push(li);
  })
console.log(doneArray);
    res.redirect('/'); // see http://expressjs.com/en/api.html for more info on redirect
});

// =======================================
// open up the port
app.listen(3000, () => console.log('Example app listening on port 3000!'))