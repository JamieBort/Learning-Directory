// example from: https://newline.theironyard.com/cohorts/15/courses/10/objective_lessons/161


// Connecting to MongoDB with Mongoose:

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/test');


// Creating a schema and model

// models/recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    prepTime: Number,
    cookTime: Number,
    ingredients: [{
        amount: { type: Number, required: true, default: 1 },
        measure: { type: String, lowercase: true, trim: true },
        ingredient: { type: String, required: true }
    }],
    steps: [String],
    source: {type: String}
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;


// Making an instance of your model

var recipe = new Recipe({name: "Pancakes"});
recipe.ingredients.push({ingredient: 'sugar', measure: " Tbsp"});
console.log(recipe.toObject());
// { name: 'Pancakes',
//   _id: 59553335625ccdda459e09b4,
//   steps: [],
//   ingredients:
//    [ { ingredient: 'sugar',
//        measure: 'tbsp',
//        _id: 59553335625ccdda459e09b5,
//        amount: 1 } ] }
