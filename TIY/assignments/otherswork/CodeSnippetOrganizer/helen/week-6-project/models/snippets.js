const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
  title: {type: String, required: true},
  language: {type: String, required: true},
  tags: {type: String},
  body: {type: String, require: true},
  notes: {type: String},
})

const Snippet = mongoose.model('snippets', snippetSchema);

module.exports = Snippet;
