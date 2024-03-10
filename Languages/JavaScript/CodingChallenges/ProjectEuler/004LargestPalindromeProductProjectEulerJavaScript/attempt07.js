// attempt07.js

// test for a Palindrome.

// const argument = 0;
// const argument = 91 * 99;
// const argument = 9199;
// const argument = 999999;
// const argument = 11141111;
const argument = 111411411;

// All we care about is if this is a palindrome.
// Return true if yes, false if no.
const PalindromeTest = function (param) {
  //   console.log(typeof param); // no need
  //   console.log("param:", param);
  let str = param.toString();
  //   console.log("length", str.length); // 4
  for (let index = 0; index < str.length / 2; index++) {
    // console.log("index:", index);
    // console.log(str[index]);
    // console.log(str[str.length - index - 1]);
    if (str[index] != str[str.length - index - 1]) return false;
  }
  return true;
};
// console.log(PalindromeTest(argument));

const argument01 = 999;
const argument02 = 999;

console.log(argument01 * argument02 - 0);
// console.log(argument01 * argument02 - 1);
// console.log(argument01 * argument02 - 2);

// // Generate numbers from two 3-digit numbers
// // 999*999 // initial * initial
// // 999*998 // initial * initial-1
// // initial -= 1;
// // 998*998 //initial * initial
// // 998*997 // initial * initial-1
// // initial -= 1;
// // 997*997

// const arr = [];

// let initial = 999;
// // let initial = 111;
// while (initial > 950) {
//   console.log("initial:", initial);
//   //   console.log(initial * initial); // we want to test this
//   arr.push(initial * initial);
//   //   console.log(PalindromeTest(initial * initial));
//   //   //   if (PalindromeTest(initial * initial)) break;
//   //   //   console.log(initial * initial - 1); // we want to test this
//   //   console.log(PalindromeTest(initial * initial - 1));
//   arr.push(initial * initial - 1);
//   initial -= 1;
// }
// console.log(arr);

// // console.log(999 * 999);

let product = argument01 * argument01;
console.log(product);
product -= 1;
console.log(product);
console.log(PalindromeTest(998001));
console.log(PalindromeTest(998000));
