
const mongoose = require('mongoose');

// get a reference to Schema
const Schema = mongoose.Schema;

// create a schema for a contact
const collectionSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  location: [{
    city: { type: String},
    state: { type: String},
  }],
  soulStrength: { type: Number, required: true }

});

// create a model for a Contact
const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
