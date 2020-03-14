users = [
  {username: "username1", password: "password1"},
  {username: "username2", password: "password2"},
  {username: "username3", password: "password3"},
  {username: "username4", password: "password4"},
  {username: "username5", password: "password5"}
];

function authenticate(req, username, password){
  let validatedUser = users.find(function(user){
    if (username === user.username && password === user.password){
      user.validated = true;
      req.session.authenticated = true;
      return true;
    } else {
      return false;
    }
  })
  console.log(req.session);
  return validatedUser;
};

module.exports = {
  users: users,
  authenticate: authenticate
}
