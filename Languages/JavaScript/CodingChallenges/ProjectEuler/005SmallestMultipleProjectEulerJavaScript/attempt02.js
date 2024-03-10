// attempt02.js

// Old title: SmallestMultipleDuplicateQuestionMark.js

// from: https://projecteuler.net/problem=5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// Every number is divisible by 1. So we can remove 1 from the list. This leaves 2, 3, 4, 5, 6, 7, 8, 9, 10.
// If the number is divisible by 9 then it is divisible by 3. So we can remove 3 from the list. This leaves 2, 4, 5, 6, 7, 8, 9, 10.
// If the number is divisible by 8 then it is divisible by 2 & 4. So we can remove 2 and 4 from the list. This leaves 5, 6, 7, 8, 9, 10.
// If it is divisible by 8 & 9 then it is divisible by 6. Since 8 * 9 = 72 and 72 mod 6 = 0. So we can remove 6 from the list. This leaves 5, 7, 8, 9, 10.
// Since (5 * 7 * 8 * 9) mod 10 = 0 we can remove 10 from the list. This leaves 5, 7, 8, 9.

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.

var array = [];
for (i = 1; i < 11; i++) {
  if (9 % i != 0) {
    // console.log(i);
    array.push(i);
  }
}
console.log(array); // [2, 4, 5, 6, 7, 8, 10]

var array2 = [];
for (i = 1; i < 11; i++) {
  if (8 % i != 0) {
    // console.log(i);
    array2.push(i);
  }
}
console.log(array2); // [3, 5, 6, 7, 9, 10]

var array3 = [];
for (i = 1; i < 11; i++) {
  if (7 % i != 0) {
    // console.log(i);
    array3.push(i);
  }
}
console.log(array3); // [2, 3, 4, 5, 6, 8, 9, 10]

var array4 = [];
for (i = 1; i < 11; i++) {
  array4.push(i);
}
console.log(array4);

var array5 = [];
array4.forEach(function (element) {
  for (i = 1; i < 11; i++) {
    // var g =element*2;
    // console.log(g);

    if (i != element) {
      if (i % element != 0) {
        array5.push(element);
        // return;
        //     console.log(element + " does not divide evenly into " + i);
      }

      if (i % element === 0) {
        console.log(element + " does divide evenly into " + i);
      }
    }

    // if (9 != element) {
    //         if (9 % element != 0) {
    //         console.log("this number does not divide evenly into 9: " + element);
    //     }
    //     if (9 % element === 0) {
    //         console.log("This number does divide evenly into 9: " + element);
    //     }
    // }
  }
});
console.log(array4);
console.log(array5);

var array5 = [];
array4.forEach(function (element) {
  for (i = 1; i < 11; i++) {
    if (i != element) {
      if (8 % element != 0) {
        console.log(element + " does not divide evenly into " + i);
      }
    }
    if (i != element) {
      if (9 % element != 0) {
        console.log(element + " does not divide evenly into " + i);
      }
    }
  }
});
console.log(array4);
console.log(array5);

var array5 = [];
array4.forEach(function (element) {
  if (9 % element != 0 && 8 % element != 0 && 7 % element != 0) {
    // console.log(element + " does not divide evenly into " + 9);
    console.log(element);
  }
});
console.log(array5);
