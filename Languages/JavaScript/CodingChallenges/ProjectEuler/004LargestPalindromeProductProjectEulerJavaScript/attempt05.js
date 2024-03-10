// attempt05.js

// from: https://projecteuler.net/problem=4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// from: https://projecteuler.net/problem=4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Solution:
// console.log(99*99);
// We want to list all numbers less than 99x99=9801 that read the same both forwards and backwards. So we want to list all the two digit numbers and then cancatinate them so that we have two 2-digit numbers.

// Create an array consisting of the integers from 0 to 1000.

var array1 = [];
var array2 = [];
var arrayProduct = [];
var a = 0;
var b = 99;
var PalindromeArray = [];

for (i = 1; i <= b; i++) {
  array1.push(i);
  array2.push(i);
}
for (i = a; i < b; i++) {
  for (j = a; j < b; j++) {
    arrayProduct.push(array1[i] * array2[j]);
  }
}
for (i = 0; i < arrayProduct.length; i++) {
  if (
    arrayProduct[i]
      .toString()
      .slice(
        arrayProduct[i].toString().length - 1,
        arrayProduct[i].toString().length,
      ) === arrayProduct[i].toString().slice(0, 1)
  ) {
    if (
      arrayProduct[i]
        .toString()
        .slice(
          arrayProduct[i].toString().length - 2,
          arrayProduct[i].toString().length - 1,
        ) === arrayProduct[i].toString().slice(1, 2)
    ) {
      if (arrayProduct[i].toString().length > 3) {
        console.log(
          "The element is " +
            arrayProduct[i] +
            ". And i is " +
            i +
            ". And the length is " +
            arrayProduct[i].toString().length,
        );
        PalindromeArray.push(arrayProduct[i]);
      }
    }
  }
}
console.log(Math.max(...PalindromeArray));
