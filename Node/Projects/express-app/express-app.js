// from: https://newline.theironyard.com/cohorts/15/courses/10/objective_lessons/156
// express-app.js

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
