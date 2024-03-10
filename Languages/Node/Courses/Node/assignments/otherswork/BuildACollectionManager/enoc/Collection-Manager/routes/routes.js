const express = require('express');
const routes = express.Router();
const DM = require('../models/dmachines');

routes.get('/', (req, res) => {
  DM.find()
    // then show my dmachines
    .then(dmachines => res.render('listDM', { dmachines: dmachines }))
    // handle errors
    .catch(err => res.send('there was an error :('));
});

routes.get('/dmForm', (req, res) => {
  if (req.query.id) {
    DM.findById(req.query.id)
      // render form with this dmachines
      .then(dmachines => res.render('dmForm', { dmachines: dmachines }));
  } else {
    res.render('dmForm');
  }
});

routes.post('/saveDm', (req, res) => {
  console.log('body: ', req.body);


  // check to see if we received an id for a dmachines
  if (req.body.id) {
    // find the dmachines by id and update it
    DM.findByIdAndUpdate(req.body.id, req.body,)
      // redirect to the homepage
      .then(() => res.redirect('/'))
      // catch validation errors
      .catch(err => {
        console.log(err);
        res.render('dmForm', {
          errors: err.errors,
          dmachines: req.body
        });
      });
  } else {
    // this is a new dmachines
    new DM(req.body)
      .save()
      // then redirect to the homepage
      .then(() => res.redirect('/'))
      // catch validation errors
      .catch(err => {
        console.log(err.errors);
        res.render('dmForm', {
          errors: err.errors,
          dmachines: req.body
        });
      });
  }
});

routes.get('/delete', (req, res) => {
  DM.findById(req.query.id)
    .remove()
    // then redirect to the homepage
    .then(() => res.redirect('/'));
});

module.exports = routes;
