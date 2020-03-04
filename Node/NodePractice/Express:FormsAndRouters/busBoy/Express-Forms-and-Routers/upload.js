// from: https://newline.theironyard.com/cohorts/15/courses/10/objective_lessons/157#receiving_uploaded_files_using_
// busboy implementation

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// adds file system methods that aren't included in the native fs module and adds promise support to the fs methods.
var fs = require('fs-extra'); 
var Busboy = require('busboy');

const mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Use static path for 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
  res.render('index')
});

// Accept POST request on '/upload'.
app.post('/upload', function (req, res) {
  var busboy = new Busboy({
	headers: req.headers
  });
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
	var saveTo = path.join('./public/uploads/', path.basename(filename));
	file.pipe(fs.createWriteStream(saveTo));
  });
  busboy.on('finish', function() {
	res.writeHead(200, { 'Connection': 'close' });
	res.end("Uploaded file to: /uploads");
  });
  // Parse HTTP-POST upload
  return req.pipe(busboy);
});

app.listen(3000, function () {
    console.log('Successfully started node application!')
})

module.exports = app;
