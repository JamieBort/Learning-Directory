const mongoose = require('mongoose');


const Schema = mongoose.Schema;

// ==== Create a schema for art collection ==== //
const artSchema = new Schema({
  title: { type: String, required: true },
  medium: { type: String },
  price: { type: Number },
  style: { type: String},

});


const Item = mongoose.model('Item', artSchema);

module.exports = Item;















// const mongoose = require('mongoose');
//
//
// const artSchema = mongoose.Schema({
//     title: { type: String, required: true, unique: true },
//     yearMade: Number,
//     medium: String,
//     description: [{
//         materials: { type: Number, required: true, default: 1 },
//         measure: { type: String, lowercase: true, trim: true },
//         dimensions: { type: Number, required: true }
//     }],
//     genre: [String],
//     source: {type: String}
// })
//
// const artWork = mongoose.model('artWork', artSchema);
//
// module.exports = artWork;
