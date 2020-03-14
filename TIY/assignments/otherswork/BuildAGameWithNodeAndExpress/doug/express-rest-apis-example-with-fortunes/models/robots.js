const mongoose = require('mongoose');

// get a reference to Schema
const Schema = mongoose.Schema;

// create a schema for a robot
const robotsSchema = new Schema({
  id: { type: String },
  username: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String },
  email: { type: String, required: true },
  university: { type: String },
  job: { type: String },
  company: { type: String },
  skills: [{ type: String }],
  phone: { type: Number },
  address: {
    street_num: { type: Number },
    street_name: { type: String },
    city: { type: String },
    state_or_province: { type: String },
    postal_code: { type: Number },
    country: { type: String }
  }
});

// create a model for a Robot
const Robot = mongoose.model('Robot', robotsSchema);

module.exports = Robot;
