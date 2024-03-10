// attempt01.js

var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n > 1) return fib(n - 1) + fib(n - 2);
};

// console.log(fib(0));
// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
console.log(fib(6));
