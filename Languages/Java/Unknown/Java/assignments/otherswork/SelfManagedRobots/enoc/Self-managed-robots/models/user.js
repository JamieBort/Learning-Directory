const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const findOrCreate = require('mongoose-findorcreate');

// get a reference to Schema
const Schema = mongoose.Schema;

// create a schema for a user
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  avatar: {type: String},
  provider: { type: String, required: true },
  providerId: { type: String },
  passwordHash: { type: String }
});

console.log(userSchema)

userSchema.plugin(findOrCreate);

userSchema.methods.setPassword = function(password) {
  this.passwordHash = bcrypt.hashSync(password, 8);
};

// individual users can authenticate their passwordHash
userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

// static method to authenticate a user
userSchema.statics.authenticate = function(email, password) {
  return (
    User.findOne({ email: email })
      // validate the user's password
      .then(user => {
        if (user && user.validatePassword(password)) {
          return user;
        } else {
          return null;
        }
      })
  );
  //.then(user => console.log('matched user: ', user));
};

// create a model for a User
const User = mongoose.model('User', userSchema);

module.exports = User;
