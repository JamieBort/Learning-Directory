// attempt03.js

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// num % x = 0 for each integer x where x>0 and x<11.

// The method for this file and for the attempt04.js file was to see if a number was evenly divisible by 1 through 20. And if it wasn't to check the next larger number.
// In other words, does 1 through 20 evenly divide 1?
// If not, does 1 through 20 evenly divide 2?
// If not, does 1 through 20 evenly divide 3?
// And so on.

let num;
let start = 1;
// const limit = 5;
const limit = 10;

// // Given 1.
console.log("for:", start);
for (let index = 1; index < limit; index++) {
  console.log(start % index);
  if (start % index != 0) {
    break;
  }
}
start++;

// // // // Given 2.
console.log("for:", start);
for (let index = 1; index < limit; index++) {
  console.log(start % index);
  if (start % index != 0) {
    break;
  }
}
start++;
// // console.log("for 2:");
// // for (let index = 1; index < limit; index++) {
// //   console.log(2 % index);
// // }

// // // // Given 3.
// console.log("for:", start);
// for (let index = 1; index < limit; index++) {
//   console.log(start % index);
//   if (start % index != 0) {
//     break;
//   }
// }
// start++;
// // console.log("for 3:");
// // for (let index = 1; index < limit; index++) {
// //   console.log(3 % index);
// // }

// // // // Given 4
// console.log("for:", start);
// for (let index = 1; index < limit; index++) {
//   console.log(start % index);
//   if (start % index != 0) {
//     break;
//   }
// }
// start++;
// // console.log("for 4:");
// // for (let index = 1; index < limit; index++) {
// //   console.log(4 % index);
// // }

// // //   given 5
// console.log("for:", start);
// for (let index = 1; index < limit; index++) {
//   console.log(start % index);
//   if (start % index != 0) break;
// }
// start++;
// // console.log("for 5:");
// // for (let index = 1; index < limit; index++) {
// //   console.log(5 % index);
// // }

// while (start < limit + 1) {
//   console.log("for:", start);
//   for (let index = 1; index < limit; index++) {
//     console.log(start % index);
//     if (start % index != 0) {
//       start++;
//       break;
//     }
//   }
// }

// while (start % 1 != 0 && start % 2 === 0) {
//   console.log("for:", start);
//   for (let index = 1; index < limit; index++) {
//     console.log(start % index);
//     if (start % index != 0) break;
//   }
//   start++;
// }
