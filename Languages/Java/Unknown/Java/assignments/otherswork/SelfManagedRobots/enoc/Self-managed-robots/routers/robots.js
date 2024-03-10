const express = require('express');
const routes = express.Router();
const db = require('../db');
const User = require('../models/user');
const mongoose = require('mongoose');


routes.get('/androids', (req, res) => {
  let collect = db.get().collection('users');

    collect.find({}).toArray((err, robots) => {
    res.render('androids', {robots: robots});
  });
});


routes.get('/save', (req, res) => {
  User.find()
    // then show my dmachines
    .then(user => res.render('editForm', { user: user }))
    // handle errors
    .catch(err => res.send('there was an error :('));
});

routes.get('/save', (req, res) => {
  if (req.user.id) {
    User.findById(req.user.id)
      // render form with this dmachines
      .then(user => res.render('editForm', { user: user }));
  } else {
    res.render('androids');
  }
});

routes.post('/save', (req, res) => {
  console.log('body: ', req.body);

if (req.body.id) {
    // find the dmachines by id and update it
    User.findByIdAndUpdate(req.user.id, req.body,)
      // redirect to the homepage
      .then(() => res.redirect('/'))
      // catch validation errors
      .catch(err => {
        console.log(err);
        res.render('editForm', {
          errors: err.errors,
          user: req.body
        });
      });
  } else {
    // this is a new dmachines
    new User(req.query.id)
      .save()
      // then redirect to the homepage
      .then(() => res.redirect('/'))
      // catch validation errors
      .catch(err => {
        console.log(err.errors);
        res.render('editForm', {
          errors: err.errors,
          user: req.session
        });
      });
  }
});

// routes.get('/delete', (req, res) => {
//  User.findById(req.query.id)
//     .remove()
//     // then redirect to the homepage
//     .then(() => res.redirect('/'));
// });



module.exports = routes;
