// attempt03.js

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  // edge cases
  if (n === 1) return 1;
  //   console.log("n/2:", n / 2);

  intArray = new Array();
  for (let index = 1; index <= n / 2; index++) intArray.push(index * 2);
  console.log("intArray:", intArray);

  //   //   function callbackFn(param01) {
  //   //     return intArray.indexOf(param01) % 2 != 0;
  //   //   }

  //   const callbackFn = (param01) => intArray.indexOf(param01) % 2 != 0;

  //   while (intArray.length > 1) {

  //     intArray = intArray.filter(callbackFn);
  //     console.log("intArray:", intArray);

  //   }
  //   return intArray[0];

  //   if (9 % 2) console.log("9 % 2");
  //   if (8 % 2) console.log("8 % 2");
  //   if (1) console.log("1");
  //   if (0) console.log("0");
  console.log(Math.trunc(8.76 / 2));
};
lastRemaining(9);

// 1
// 1

// 1 2 // left
// 2

// 1 2 3 // left
// 2

// 1 2 3 4 // left
// 2 4 // right
// 2

// 1 2 3 4 5 // left
// 2 4 // right
// 2

// 1 2 3 4 5 6 // left
// 2 4 6 // right
// 4

// 1 2 3 4 5 6 7 // left
// 2 4 6 // right
// 4

// 1 2 3 4 5 6 7 8 // left
// 2 4 6 8 // right
// 2 6 // left
// 6

// 1 2 3 4 5 6 7 8 9 // left
// 2 4 6 8 // right
// 4 6 // left
// 6

// 1 2 3 4 5 6 7 8 9 10 // left
// 2 4 6 8 10 // right
// 4 8 // left
// 8

// 1 2 3 4 5 6 7 8 9 10 11 // left
// 2 4 6 8 10 // right
// 4 8 // left
// 8
