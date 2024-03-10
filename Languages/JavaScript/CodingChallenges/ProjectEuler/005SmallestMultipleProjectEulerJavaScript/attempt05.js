// // attempt05.js

// // Generate an array of the first 100 numbers
// const array = [];
// for (let index = 0; index < 100; index++) {
//   array.push(index);
// }
// // console.log(array.length);

// const array01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array02 = [];

// function isPrime(n) {
//   // Corner case
//   if (n <= 1) {
//     console.log(n, "is less than or equal to 1");
//     return false;
//   }

//   // Check from 2 to n-1
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       console.log(n, "is not a prime");
//       return false;
//     }
//   }
//   console.log(n, "is a prime");
//   array02.push(n);
//   return true;
// }

// // Driver Code

// // isPrime(11) ? console.log("true") : console.log("false");

// array01.forEach((element) => {
//   isPrime(element);
//   //   console.log(element);
// });

// for (let index = 0; index < 100; index++) {
//   isPrime(index);
// }
// console.log(array02);
// // ========

function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

const randomNumber = Math.floor(Math.random() * 1000);
console.log(
  "Prime factors of",
  randomNumber + ":",
  primeFactors(randomNumber).join(" "),
);
