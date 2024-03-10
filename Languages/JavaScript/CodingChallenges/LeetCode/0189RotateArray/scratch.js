// scratch.js

// // const temp = "rat";
// const temp = 444;
// let nums = [-1, -100, 3, 99],
//   k = 2;

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

// nums.push(...temp);

// console.log(nums);

var rotate = function (nums, k) {
  //   while (nums.length <= k) {
  //     k = k - nums.length;
  //     console.log("k:", k);
  //   }
  const temp = nums.splice(0, nums.length - k);
  console.log("temp:", temp);
  nums.push(...temp);
};

// console.log(rotate(nums, k));
console.log("before:", nums);
rotate(nums, k);
console.log("after:", nums);
