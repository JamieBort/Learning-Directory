//Create Schema here
// Use MongoDB that has all the data.js file
//   Database: robotsDB
//   Collection: robotCollection

//REQUIRE PACKAGES
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const findOrCreate = require('mongoose-findorcreate');

// get a reference to Schema
const Schema = mongoose.Schema;

// create a schema for a user (existing Robot user from data.js)
const allUsersSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  provider: { type: String, required: true },
  providerId: { type: String },
  passwordHash: { type: String }
});

allUsersSchema.plugin(findOrCreate);

allUsersSchema.methods.setPassword = function(password) {
  this.passwordHash =
  bcrypt.hashSync(password, 8);
};
//8 is extra information for the salting algorithm.

// static method to authenticate a user
allUsersSchema.statics.authenticate = function(email, password) {
  return (
  allUsersSchema.findOne({ email: email })
      // validate the user's password
      .then(allUsersSchema => {
        if (allUsersSchema && allUsersSchema.validatePassword(password)) {
          return allUsersSchema;
        } else {
          return null;
        }
      })
  );
  //.then(user => console.log('matched user: ', user));
};

// create a model from allUsersSchema
const allUsers = mongoose.model('allUsers', allUsersSchema);

module.exports = allUsers;
