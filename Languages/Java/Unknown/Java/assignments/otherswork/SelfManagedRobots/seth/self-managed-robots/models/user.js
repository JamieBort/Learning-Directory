const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  // _id: {type: String},
  id : {type: String},
  username : {type: String, required: true},
  name : {type: String, required: true},
  avatar : {type: String},
  email : {type: String, required: true},
  university : {type: String},
  job : {type: String},
  company : {type: String},
  skills : [{type: String}],
  phone : {type: Number},
  address : {
    street_num : {type: Number},
    street_name : {type: String},
    city : {type: String},
    state_or_province : {type: String},
    postal_code : {type: Number},
    country : {type: String}
  },
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

const User = mongoose.model('users', userSchema);

module.exports = User;
