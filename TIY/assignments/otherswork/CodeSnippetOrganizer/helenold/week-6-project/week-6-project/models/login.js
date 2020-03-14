const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username : {type: String, required: true},
  password: {type:String, required: true},
  passwordHash: {type: String}
});

userSchema.methods.setPassword = function(password) {
  this.passwordHash = bcrypt.hashSync(password, 8);
};

// individual users can authenticate their passwordHash
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

// static method to authenticate a user
userSchema.statics.authenticate = function(username, password) {
  return (
    User.findOne({ username: username })
      // validate the user's password
      .then(user => {
        if (user && user.validatePassword(password)) {
          console.log('User and Password valid');
          return user;
        } else {
          return null;
        }
      })
  );
};

const User = mongoose.model('userdirectory', userSchema);

module.exports = User;
