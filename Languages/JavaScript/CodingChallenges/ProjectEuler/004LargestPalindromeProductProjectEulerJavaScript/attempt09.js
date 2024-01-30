// attempt09.js

const argument01 = 99;
const argument02 = 999;
const argument03 = 5;
const array = [];
// let stat = false;

// Generate an array of integers
for (let index01 = 1; index01 <= argument02; index01++) {
  for (let index02 = index01; index02 <= argument02; index02++) {
    // console.log(
    //   "INDEX01 * INDEX02:",
    //   index01,
    //   "*",
    //   index02,
    //   "=",
    //   index01 * index02,
    // );
    array.push(index01 * index02);
  }
}

// Sort that list of integers from largest to smallest.
// console.log(array);
array.sort(function (a, b) {
  return b - a;
});
// console.log(array);

// Function to check if the param is a palindrome or not.
const PalindromeCheck = function (param) {
  //   console.log("original param:", param);
  let str = param.toString();
  //   console.log("str:", str);
  for (let index = 0; index < str.length / 2; index++) {
    // console.log(
    //   "INDEX:",
    //   index,
    //   "PARAM[INDEX]:",
    //   str[index],
    //   "str[str.length - INDEX - 1]:",
    //   str[str.length - index - 1],
    // );
    if (str[index] != str[str.length - index - 1]) {
      //   stat = false;
      //   return stat;
      return false;
    }
  }
  //   stat = true;
  //   return stat;
  return true;
};

//   Finding the highest palindrome

array.every((element) => {
  if (PalindromeCheck(element) === true) {
    console.log("element:", element);
    return false;
  }
  return true;
});
