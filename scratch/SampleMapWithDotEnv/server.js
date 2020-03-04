const express = require('express');
// const bodyParser          = require('body-parser'); // I don't think we need this.
// const request             = require('request'); // I don't think we need this.
const dotenv              = require('dotenv').config();
const app                 = express();
// const router              = express.Router();

// Middeware
app.use(express.static('public'));

// attempt to use inner html to "inject" the api key into the website.
// var h1 = document.createElement("h1");
// h1.innerHTML = "hi";

// <script src="https://maps.googleapis.com/maps/api/js?key=" + "GOOGLE_KEY" + "&callback=initMap" async defer></script>

const port = 3000;


app.get('/hello', (req, res) => res.send('Hello World!'));

app.get('/bye', (req, res) => 
    // res.send(process.env.GOOGLE_KEY)

    // res.send('https://maps.googleapis.com/maps/api/js?key=AIzaSyAViFnNL6tWg6zOcqq3AtUzZ6XmrmFE4o4&callback=initMap')
    
    // res.send('https://maps.googleapis.com/maps/api/js?key='+process.env.GOOGLE_KEY+'&callback=initMap')

    res.json('https://maps.googleapis.com/maps/api/js?key='+process.env.GOOGLE_KEY+'&callback=initMap')
    
    // res.send('bye')
    // res.send(req.params)
);

app.get('/flights/:from-:to', (req, res) =>
//  res.send('Hello World!')
res.send(req.params)
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));