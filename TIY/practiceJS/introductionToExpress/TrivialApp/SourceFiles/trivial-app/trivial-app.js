const express = require('express');
const path = require('path');
const app = express();

app.use('/files', express.static('files'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
