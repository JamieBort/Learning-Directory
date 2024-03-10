const express  = require('express');
const logoutRouter = express.Router();

logoutRouter.get("/", function(req, res) {
  req.session.destroy();
  res.redirect("/login");
  // res.render('login');
});

module.exports = logoutRouter;