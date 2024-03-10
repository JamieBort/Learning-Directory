// attempt04.js

// ### Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

// // Example 2:
// // Input: nums = [-1,-100,3,99], k = 2
// // Output: [3,99,-1,-100]
// // Explanation:
// // rotate 1 steps to the right: [99,-1,-100,3]
// // rotate 2 steps to the right: [3,99,-1,-100]
// const nums = [ -1, -100, 3, 99 ];
// const k = 2;

const length = nums.length;

var rotate = function (nums, k) {
  console.log("original array:", nums);
  let temp1 = nums[k];
  nums[(k - 0) % nums.length] = nums[(k - 1) % nums.length];
  console.log("array:", nums);
  nums[(k - 1) % nums.length] = nums[(k - 2) % nums.length];
  console.log("array:", nums);
  nums[(k - 2) % nums.length] = nums[(k - 3) % nums.length];
  console.log("array:", nums);
  nums[(k - 3) % nums.length] = nums[(k - 4) % nums.length];
  console.log("array:", nums);
};

rotate(nums, k);

// // console.log("nums[(k - 4) % nums.length]:", nums[(k - 4) % nums.length]);
// // console.log((k - 2) % nums.length); // 1. want 1 we're good.
// // console.log((k - 3) % nums.length); // 0. want 0 we're good.
// // console.log((k - 4) % nums.length); // -1. want length -1
// // console.log((k - 5) % nums.length); // -> want length - 2
// // console.log(nums.length % 1);
// // console.log(nums.length % 0);
// // console.log(nums.length % -1);
// // console.log(length - 1);
// console.log(length + (((k - 2) % nums.length) % length));
