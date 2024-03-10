function checkAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/login");
  } else {
    next();
  }
}

module.exports = { checkAuth: checkAuth };

// function getUser(name) {
//   return "The user is " + name;
// };

// module.exports = { getUser: getUser };