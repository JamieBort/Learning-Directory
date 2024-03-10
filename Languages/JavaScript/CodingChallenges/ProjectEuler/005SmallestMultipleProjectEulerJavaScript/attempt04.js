// attempt04.js

// The method for this file and for the attempt03.js file was to see if a number was evenly divisible by 1 through 20. And if it wasn't to check the next larger number.
// In other words, does 1 through 20 evenly divide 1?
// If not, does 1 through 20 evenly divide 2?
// If not, does 1 through 20 evenly divide 3?
// And so on.

let start = 1;
const limit = 10;
const temp = 15;
let random = 4;

// console.log("for:", start);
// for (let index = 1; index < limit; index++) {
//   console.log(start % index);
//   if (start % index != 0) break;
// }
// start++;

// // console.log(temp % 3 === 0);
// // console.log(limit % random != 0);
// console.log(temp % 3 === 0 && limit % random != 0);

// console.log(start % 1 != 0);

// console.log(start % 2 != 0);

// console.log(start % 3 != 0);

// console.log(start % 4 != 0);

while (start % 2 != 0 && start % 3 != 0 && start % 4 != 0) {
  //   console.log("not yet");
  //   random = 5;
  console.log("for:", start);
  for (let index = 1; index < limit; index++) {
    console.log(start % index);
    if (start % index != 0) break;
  }
  start++;
}
// console.log("okay now");
// // console.log(limit % random != 0);

// console.log(temp % 3 === 0 && limit % random != 0);

console.log("start", start);
