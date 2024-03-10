const express = require('express');
const routes = express.Router();
const moment = require('moment');

// configure the webroot
routes.get('/', function(req, res) {
  res.render('home', {
    formattedDate: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
    foods: req.session.foods
  });
});

module.exports = routes;
