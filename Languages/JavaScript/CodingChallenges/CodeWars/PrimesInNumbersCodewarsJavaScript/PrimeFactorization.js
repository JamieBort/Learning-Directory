// from: https://www.codewars.com/kata/54d512e62a5e54c96200019e
// and from: Josh - coppied and pasted. see https://mail.google.com/mail/u/0/#inbox/164a9ea22f25bd87
// See: https://mail.google.com/mail/u/0/#search/from%3Ajosh.0.edgell%40gmail.com+prime/164853b1e69f9e03 for the original link.
// Given a positive number n > 1
// find the prime factor decomposition of n. The result will be a string with the following form :
// "(p1**n1)(p2**n2)...(pk**nk)" with the p(i) in increasing order and n(i) empty if n(i) is 1.
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


// n = tk+p

// Array of all prime numbers less than 200.

var array200 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

// Definition of a prime number. It is divisible by only 1 and itself.
// 12 is not prime because 12/2 = 6 which is an integer.

var array1 = [];
var array2 = [];

for (i = 1; i < 4; i++) {
  array1.push(i);
}
array1.forEach(function (element) {
  for (i = 0; i < array1.length + 1; i++) {

    for (j = 1; j < i; j++) {
      if (i != j) {
        // console.log("Hello");
        console.log(i + "/" + j);

        if (j%i == 2) {
          array2.push(i);
          // console.log(i + "/" + j);
          
          console.log("The jth term: " + j);
          console.log("The ith term: " + i);
          // console.log("Bye");
        }
      }
    }
  }
  // console.log(element);
});

console.log(array1);
console.log(array2);