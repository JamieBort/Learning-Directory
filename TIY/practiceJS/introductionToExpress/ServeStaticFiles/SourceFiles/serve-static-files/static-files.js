const express = require('express')
const path = require('path');
const app = express()

app.use('/files', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('Check out the following files: localhost:3000/files/ironyardlogo.png and localhost:3000/files/video.mp4')
})

app.listen(3000, function () {
  console.log('Serving static files')
})
