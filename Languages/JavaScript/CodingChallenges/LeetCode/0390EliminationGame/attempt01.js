// attempt01.js

/**
 * @param {number} n
 * @return {number}
 */

// generating list arr of all integers in the range [1, n] sorted in a strictly increasing order.
const k = 9,
  intArray = new Array();
for (let index = 1; index <= k; index++) intArray.push(index);
// console.log(intArray);

var lastRemaining = function (n) {
  //   console.log("original:", n);
  //   let t = 0;
  function callbackFn(param01) {
    return n.indexOf(param01) % 2 != 0;
  }

  while (n.length > 1) {
    // // remove left
    n = n.filter(callbackFn);
    //   t = 1;
    //   console.log("filtered:", filtered);
    console.log("n:", n);
    //   console.log("t:", t);

    n.reverse();
    console.log("reversed:", n);

    //   n = n.filter(callbackFn);
    //   console.log("n:", n);

    //   n.reverse();
    //   console.log("reversed:", n);

    //   n = n.filter(callbackFn);
    //   console.log("n:", n);
  }
  return n[0];

  //   filtered = filtered.filter(callbackFn);
  //   //   t = 1;
  //   console.log("filtered again:", filtered);

  //   // // remove right
  //   //   n.filter(callbackFn(right), thisArg);
  //   filtered = filtered.filter(callbackFn);
  //   t = 0;
  //   console.log("filtered:", filtered);

  // // remove left
  //   n.filter(callbackFn(left), thisArg);

  // // etc.
  // // }
};
console.log(lastRemaining(intArray));
