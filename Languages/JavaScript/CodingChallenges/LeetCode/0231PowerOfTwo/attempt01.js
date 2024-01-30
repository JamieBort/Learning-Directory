// attempt01.js

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // edge cases
  if (n === 1) return true;
  if (n === 0) return false;

  if (n === 2) return true;
  else {
    n = n / 2;
    if (n % 2 != 0) return false;
    return isPowerOfTwo(n);
  }
};
for (let index = 0; index < 140; index++) {
  if (isPowerOfTwo(index)) console.log("n:", index);
}
