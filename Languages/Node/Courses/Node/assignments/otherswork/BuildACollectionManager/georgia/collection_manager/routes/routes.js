const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');

const Item = require('../models/artwork');

routes.get('/', (req, res) => {
  Item.find()

    .then(items => {
      res.render('listItems', { items: items });
    })

    .catch(err => res.send('there was an error :('));
});

routes.get('/itemForm', (req, res) => {
  if (req.query.id) {
    Item.findById(req.query.id)

      .then(item => res.render('itemForm', { item: item }));
  } else {
    res.render('itemForm');
  }
});

routes.post('/saveItem', (req, res) => {
  console.log(req.body);

  if (!req.body.id) {
    req.body.id = new mongoose.mongo.ObjectID();
  }

  if (req.body.custom) {
    req.body.custom = true;
  } else {
    req.body.custom = false;
  }

  req.body.materials = req.body.materials.filter((item) => {
    return item != '';
  })
  Item.findByIdAndUpdate(req.body.id, req.body, { upsert: true })
    .then(() => res.redirect('/'))

    .catch(err => {
      console.log(err);
      res.render('itemForm', {
        errors: err.errors,
        item: req.body
      });
    });
});

routes.get('/deleteItem', (req, res) => {
  Item.findById(req.query.id)
    .remove()

    .then(() => res.redirect('/'));
});

module.exports = routes;
