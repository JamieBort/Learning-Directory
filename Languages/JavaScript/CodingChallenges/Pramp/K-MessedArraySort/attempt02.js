// attempt02.js

// Method: Implement `Insertion Sort` irrespective of k.

// input:
const arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9],
  // const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  k = 2;

// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // More examples from the internet
// Input: arr[] = {6, 5, 3, 2, 8, 10, 9}, K = 3
// Output: arr[] = {2, 3, 5, 6, 8, 9, 10}

// Input: arr[] = {10, 9, 8, 7, 4, 70, 60, 50}, k = 4
// Output: arr[] = {4, 7, 8, 9, 10, 50, 60, 70}

const check = ([param01, param02]) => {
  if (param01 > param02) return [param02, param01];
  else return [param01, param02];
};

// console.log(check([2, -10]));

const sortKMessedArray = (param01) => {
  console.log("before:", param01);
  // // for (let index = 0; index < param01.length; index++) {
  // for (let index = 0; index < 3; index++) {
  //   if (param01[index] > param01[index + 1])
  //     [param01[index], param01[index + 1]] = [
  //       param01[index + 1],
  //       param01[index],
  //     ];

  //   // if(check([param01[index],param01[index+1]]))
  // }

  param01.forEach((element) => {
    check([param01[element], param01[element + 1]]);
  });
  console.log("after:", param01);
};
sortKMessedArray(arr);
