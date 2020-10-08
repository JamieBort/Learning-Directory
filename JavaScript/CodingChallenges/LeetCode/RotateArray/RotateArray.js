// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

nums = [1, 2, 3, 4, 5, 6, 7]; k = 3; // want [5, 6, 7, 1, 2, 3, 4]

// 0%7 = 0
// 1%7 = 1
// 2%7 = 2
// 3%7 = 3
// 4%7 = 4
// 5%7 = 5
// 6%7 = 6
// 7%7 = 0
// 8%7 = 1

// // Time limit exceeded with this attempt.
// // Attempt to do with with .split()
var rotate = function (nums, k) {
    // console.log(nums);
    var newArray = [];
    for (let index = 0; index < nums.length; index++) {
        newArray.push(nums[(index + k + 1) % nums.length]);
        // console.log(newArray);   
    }
    console.log(newArray);
    return (newArray);
};
rotate(nums, k);