// attempt02.js

// Find the sum of the digits in the number 100!

// Solution
// Calculate the number 100!
// Parse the number 100! for each of its digits.
// Sum those digits up.

// Generating the factorial
const generateFactorial = function (param) {
  let num = BigInt(1);
  for (let index = 2; index <= param; index++) {
    num *= BigInt(index);
  }
  //   console.log("num:", num);
  const str = num.toString();
  return str;
};
// const returnValue = generateFactorial(10);
const returnValue = generateFactorial(100);

const array = [];
// console.log("typeof:", typeof returnValue);
// console.log("length:", returnValue.length);
for (let index = 0; index < returnValue.length; index++) {
  //   console.log("digit:", returnValue[index]);
  //   console.log("typeof:", typeof returnValue[index]);
  array.push(parseInt(returnValue[index]));
}

console.log("array:", array);

// Sum the digits of the array.
let tally = 0;
for (let index = 0; index < array.length; index++) {
  //   console.log("index:", array[index]);
  tally += array[index];
}
console.log("tally:", tally);
