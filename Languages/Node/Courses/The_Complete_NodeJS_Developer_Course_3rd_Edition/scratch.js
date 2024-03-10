// const fs = require('fs');
// // fs.readFileSync

// // import { readFile } from 'fs';

// // macOS, Linux, and Windows
// fs.readFile(process.stdin, (err, data) => {
// 	// => [Error: EISDIR: illegal operation on a directory, read <directory>]

// 	if (err) {
// 		return console.log(err);
// 	}
// 	console.log(err);
// 	console.log(data);
// });

console.clear();
// console.log('test');
// console.log(process);
// console.log(process.argv);
// console.log(process.argv[2]);

const input = process.argv[2];
console.log('input: ', input);
