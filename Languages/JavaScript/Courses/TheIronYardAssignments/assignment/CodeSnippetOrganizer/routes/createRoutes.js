// define packages
const express = require('express');
const routes = express.Router();
const User = require('../models/login');
const Snippet = require('../models/snippets');
const flash = require('express-flash-messages');
const bodyParser = require('body-parser');

// routes.use
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({
extended: false
}));

// search page
routes.get('/search', (req, res) => {
  let search = req.query.mySearch;
  Snippet.find({$or: [{language: search}, {tags: search}]})
  .then(snippets => res.render('search', {snippets: snippets}))
  .catch(err =>res.send('nope'))
});

// create routes.get
routes.get('/create', (req, res) => {
  if (req.query.id) {
    Snippet.findById(req.query.id)
      .then(snippets =>
        res.render('create', {
          snippets: snippets
        }));
  } else {
    res.render('create');
  }
})

// what's going on here?
routes.post('/new', (req, res) => {
  if (req.body.id) {
    Snippet.findById(req.body.id)
  } else {
    new Snippet(req.body)
      .save()
      .then(() => res.redirect('/'))
      .catch(err => {
        console.log(err.errors);
        res.render('create', {
          errors: err.errors,
          snippets: req.body
        })
      })
  }
});

// export routes
module.exports = routes;
