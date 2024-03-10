const express = require('express');
const routes = express.Router();
const db = require('../db');


routes.get('/', (req, res) => {
  let collect = db.get().collection('robots');

    collect.find({}).toArray((err, robots) => {
    res.render('home', {robots: robots});
  });
});

routes.get('/:search', (req, res) =>{
  let llection = db.get().collection('robots');

  llection.findOne({username: req.params.search}, (err, robots) => {
    res.render('profile', {robots:robots});
  });
});

module.exports = routes;
