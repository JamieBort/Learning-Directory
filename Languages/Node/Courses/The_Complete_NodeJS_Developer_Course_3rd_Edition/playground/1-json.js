const fs = require('fs');

const book = {
	title: 'book title',
	author: 'book author',
};

// *** WRITE TO FILE ***
let bookJson = JSON.stringify(book); // Converts JSON to a string.
// console.log(book);
// console.log('---------------');
// console.log(bookJson);
fs.writeFileSync('1-json.json', bookJson); // Writes to a file. Creates it if it's not already existing.

// *** READ FROM FILE ***
let dataBuffer = fs.readFileSync('./1-json.json'); // returns the contents of the path
console.log('dataBuffer as contents of the path: \n', dataBuffer, '\n');

let dataJson = dataBuffer.toString(); // decodes buf to a string
console.log('dataJson as a string: \n', dataJson, '\n');

let data = JSON.parse(dataJson); // converts JavaScript Object Notation to an object.
console.log('data as object: \n', data, '\n');

console.log('data.title: \n', data.title, '\n');

const newBook = {
	title: 'New Book Title Again',
	author: 'New Book Author',
};

data.title = newBook.title;
data.author = newBook.author;
data.age = 54;

// *** OVERWRITE THE 1-json.json FILE ***
bookJson = JSON.stringify(data);
// console.log(book);
// console.log('---------------');
// console.log('bookJson: \n', bookJson, '\n');
fs.writeFileSync('1-json.json', bookJson);

// *** READ FROM FILE AGAIN ***
dataBuffer = fs.readFileSync('./1-json.json'); // returns the contents of the path
console.log('dataBuffer as contents of the path: \n', dataBuffer, '\n');

dataJson = dataBuffer.toString(); // decodes buf to a string
console.log('dataJson as a string: \n', dataJson, '\n');

data = JSON.parse(dataJson); // converts JavaScript Object Notation to an object.
console.log('data as object: \n', data);
