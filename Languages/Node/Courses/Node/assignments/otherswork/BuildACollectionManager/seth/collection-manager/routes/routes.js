const express = require('express');
const qs = require('qs');
const assert = require('assert');
const routes = express.Router();

const Collection = require('../models/collection');



routes.get('/', (req, res) => {

  Collection.find()


    .then(collections => res.render('listCollections', { collections: collections }))
    .then(() => console.log(req.body))


    .catch(err => res.send('there was an error :('));
});

routes.get('/collectionForm', (req, res) => {
  if (req.query.id) {
    Collection.findById(req.query.id)
      .then(collection => res.render('collectionForm', { collection: collection }));
  } else {
    res.render('collectionForm');
  }
});

routes.post('/saveCollection', (req, res) => {

  //   let collection = new Collection({
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   location: [
  //     {
  //       city: req.body.city,
  //       state: req.body.state,
  //     }
  //   ],
  //   soulStrength: req.body.soulStrength
  // })
  if (req.body.id) {
      Collection.findByIdAndUpdate(req.body.id, req.body, { upsert: true })

      .then(() => console.log(req.body))
      .then(() => res.redirect('/'))
    } else {
      new Collection(req.body)
        .save()
        // then redirect to the homepage
        .then(() => console.log(req.body))
        .then(() => res.redirect('/'))
        // catch validation errors
        .catch(err => {
          console.log(err);
          res.render('collectionForm', {
            errors: err.errors,
            collection: req.body
          });
        });
    }

});

routes.get('/deleteCollection', (req, res) => {
  Collection.findById(req.query.id)
    .remove()

    .then(() => res.redirect('/'));
});

module.exports = routes;



// mongoimport --db collectionManager --collection collections --out collectionData.json
//
//
// mongoexport --db collectionManager --collection collections --out collectionData.json
