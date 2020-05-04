// from: https://projecteuler.net/problem=4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// from: https://projecteuler.net/problem=4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Ways to improve the code below:
// Minimize the number of 'if' statements below.
// Remove line 36.
// Generalize 'arrayProduct[i].toString().length' so that the code can be used for palindromes made from the product of an two digits of any length. 
// Refactor in other way - look for them.

var array1 = [];
var array2 = [];
var arrayProduct = [];
var a = 0;
var b = 999;
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
	if (arrayProduct[i].toString().slice(arrayProduct[i].toString().length - 1, arrayProduct[i].toString().length) === arrayProduct[i].toString().slice(0, 1)) {
		if (arrayProduct[i].toString().slice(arrayProduct[i].toString().length - 2, arrayProduct[i].toString().length - 1) === arrayProduct[i].toString().slice(1, 2)) {
			if (arrayProduct[i].toString().slice(arrayProduct[i].toString().length - 3, arrayProduct[i].toString().length - 2) === arrayProduct[i].toString().slice(2, 3)) {
				if ((arrayProduct[i].toString().length) > 5) {
					console.log("The element is " + arrayProduct[i] + ". And i is " + i + ". And the length is " + arrayProduct[i].toString().length);
					PalindromeArray.push(arrayProduct[i]);
				}
			}
		}
	}
}
console.log(Math.max(...PalindromeArray));