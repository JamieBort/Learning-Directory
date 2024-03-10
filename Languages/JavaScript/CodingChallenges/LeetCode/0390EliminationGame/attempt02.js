// attempt02.js

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  intArray = new Array();
  for (let index = 1; index <= n; index++) intArray.push(index);
  console.log("length of intArray:", intArray.length);

  function callbackFn(param01) {
    return intArray.indexOf(param01) % 2 != 0;
  }

  while (intArray.length > 1) {
    intArray = intArray.filter(callbackFn);
    console.log("intArray:", intArray);
    intArray.reverse();
  }
  return intArray[0];
};

console.log(lastRemaining(3979));
