// scratch.js

// Studied this one.
// It is from https://leet-codes.blogspot.com/2022/10/continuous-subarray-sum.html

// // Example 1:
// // Input: nums = [23,2,4,6,7], k = 6
// // Output: true
// // Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
// const nums = [23, 2, 4, 6, 7],
//   k = 6;

// // Example 2:
// // Input: nums = [23,2,6,4,7], k = 6
// // Output: true
// // Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// // 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
// const nums = [23, 2, 6, 4, 7],
//   k = 6;

// Example 3:
// Input: nums = [23,2,6,4,7], k = 13
// Output: false
const nums = [23, 2, 6, 4, 7],
  k = 13;

// // // Example 4:
// // // Input: nums =[2,4,3],k =6
// // // Output: true
// const nums = [2, 4, 3],
//   k = 6;

var checkSubarraySum = function (nums, k) {
  let map = new Map();
  map.set(0, -1);
  //   console.log("nums before:", nums);
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  //   console.log("nums after:", nums);

  for (let i = 0; i < nums.length; i++) {
    // console.log("nums inside:", nums);
    let res = nums[i];
    // console.log("res:", res);
    if (k !== 0) res = res % k;
    console.log("res:", res);

    //     if(map.has(res) && i - map.get(res) > 1) return true;

    //     if(!map.has(res)) map.set(res, i);
  }

  // return false;
};
checkSubarraySum(nums, k);
