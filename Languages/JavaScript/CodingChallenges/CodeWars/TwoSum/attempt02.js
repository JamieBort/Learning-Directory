// attempt01.js

// Brute force solution

// // Example 1:
// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
const numbers = [2, 7, 11, 15];
const target = 9;
// want [0,1]

// // Example 2:
// // Input: nums = [3,2,4], target = 6
// // Output: [1,2]
// const numbers = [3, 2, 4];
// const target = 6;
// // want [1,2]

// // Example 3:
// // Input: nums = [3,3], target = 6
// // Output: [0,1]
// const numbers = [3, 3];
// const target = 6;
// // want [0,1]

// // Example 4:
// // Input: nums = [1, 2, 3], target = 4
// const numbers = [1, 2, 3];
// const target = 4;
// // want [0,2]

var twoSum = function (numbers, target) {
  //   Check:
  //   For a given input array this algorithm does the following steps:
  // Create a hashmap which accepts integer datatype as key and value.
  const map1 = new Map();
  // Iterate through each element in the given array starting from the first element.
  for (let index = 0; index < numbers.length; index++) {
    // In each iteration check if required number (required  number = target sum - current number) is present in the hashmap.
    // console.log("numbers[index]:", numbers[index]);
    // console.log("target - numbers[index]:", target - numbers[index]);
    // console.log(
    //   "map1.get(target - numbers[index]):",
    //   map1.get(target - numbers[index]),
    // );
    if (map1.has(target - numbers[index])) {
      // console.log([map1.get(target - numbers[index]), numbers[index]]);
      // console.log("map1", map1);
      // If present, return {required number index, current number index} as  result.
      return [map1.get(target - numbers[index]), index];
    } else {
      // Otherwise add the current iteration number as key and its index as value to the hashmap. Repeat this  until you find the result.
      map1.set(numbers[index], index);
      // console.log("map1:", map1);
    }
  }
};
console.log(twoSum(numbers, target));
