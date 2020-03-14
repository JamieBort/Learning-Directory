const mongoose = require('mongoose');

// var findDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = newdb.collection('robots');
//   // Find some documents
//   collection.find().toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs)
//     callback(docs);
//   });
// };

const robotSchema = new mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  username: String,
  name: String,
  avatar: String,
  email: String,
  university: String,
  job: {type: String, default: null},
  company: String,
  skills: [String],
  phone: {type: String},
  address: [{
    street_num: String,
    street_name: String,
    city: String,
    state_or_province: String,
    postal_code: Number,
    country: String
  }]
});
//test

const robot = mongoose.model('robot', robotSchema)

module.exports = robot;
