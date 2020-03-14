const mongoose = require('mongoose');

// get a reference to Schema
const Schema = mongoose.Schema;

// create a schema for a DM
const dmSchema = new Schema({
  Name: { type: String, required: true },
  yearReleased: { type: String, required: true },
  components: {
  outputs: {type: Number},
  digitalOranalogue: {type: String}
}
});

// create a model for a DM
const DM = mongoose.model('DM', dmSchema);

module.exports = DM;
