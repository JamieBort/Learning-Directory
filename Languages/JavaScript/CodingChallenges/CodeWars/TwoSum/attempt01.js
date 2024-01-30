// attempt01.js

// Brute force solution

// // Example 1:
// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// const numbers = [2, 7, 11, 15];
// const target = 9;

// // Example 2:
// // Input: nums = [3,2,4], target = 6
// // Output: [1,2]
// const numbers = [3, 2, 4];
// const target = 6;

// // Example 3:
// // Input: nums = [3,3], target = 6
// // Output: [0,1]
// const numbers = [3, 3];
// const target = 6;

// Example 4:
// Input: nums = [1, 2, 3], target = 4
const numbers = [1, 2, 3];
const target = 4;

var twoSum = function (numbers, target) {
  //   Check:
  for (let index = 0; index < numbers.length; index++) {
    for (let jj = index + 1; jj < numbers.length; jj++) {
      if (numbers[index] + numbers[jj] == target) {
        return [index, jj];
      }
    }
  }
};
console.log(twoSum(numbers, target));
