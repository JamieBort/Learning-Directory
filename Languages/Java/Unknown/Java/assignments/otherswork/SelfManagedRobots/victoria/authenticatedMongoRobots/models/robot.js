const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// const findOrCreate = require('mongoose-findorcreate');

// get a reference to Schema
const Schema = mongoose.Schema;

// create a schema for a user
const robotSchema = new Schema({
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
  provider: { type: String, required: true },
  providerId: { type: String },
  passwordHash: {type: String}
});

robotSchema.methods.setPassword = function(password) {
  this.passwordHash = bcrypt.hashSync(password, 8);
};

// individual users can authenticate their passwordHash
robotSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

// static method to authenticate a user
robotSchema.statics.authenticate = function(email, password) {
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
};

// create a model for a User
const User = mongoose.model('Robot', robotSchema);

module.exports = User;
