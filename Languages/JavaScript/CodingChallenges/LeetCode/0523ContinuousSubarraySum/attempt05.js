// attempt05.js

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
  const length = nums.length;
  console.log("length:", length);
  function checkSum(param) {
    console.log("Param", param);
    // console.log("k", k);
    if (param % k === 0) return true;
    else return false;
  }
  //   console.log(checkSum(54));

  // find all of the sums of the elements

  for (let index01 = 0; index01 < length - 1; index01++) {
    console.log("index01:", index01);
    let sum = nums[index01] + nums[index01 + 1];
    // console.log(checkSum(sum));
    // checkSum(sum);
    if (checkSum(sum)) return true;
    else {
      for (let index02 = index01 + 2; index02 < length; index02++) {
        console.log("index02:", index02);
        sum += nums[index02];
        if (checkSum(sum)) return true;
      }
      console.log("============");
    }
  }
  return false;
};
// checkSubarraySum(nums, k);
console.log(checkSubarraySum(nums, k));
