const express = require('express');
const routes = express.Router();
const Robot = require('../models/robot')
// require the login
const requireLogin = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

routes.use(requireLogin);

routes.get('/', (req, res) => {
  //WITH mongoose
  Robot.find({}, function(err, robots) {
    res.render('home', { users: robots });
  });

  //WITH MONGO
//   let coll = db.get().collection('robots');
//   coll.find({}).toArray((err, robots) => {
//     res.render('home', { users: robots });
//   });
});

routes.get('/:userName', (req, res) => {
   //WITH mongoose

  Robot.findOne({'username': req.params.userName}, (err, robot) => {
    res.render('goof', robot);
  });

   // WITH MONGO
  // let col = db.get().collection('robots');
  // col.findOne({username: req.params.userName}, (err, robot) => {
  //   res.render('goof', robot);
  // });
});

module.exports = routes;
