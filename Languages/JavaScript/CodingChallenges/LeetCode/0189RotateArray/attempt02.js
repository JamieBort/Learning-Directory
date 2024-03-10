// attempt02.js

// // ### Example 1:
// // Input: nums = [1,2,3,4,5,6,7], k = 3
// // Output: [5,6,7,1,2,3,4]
// // Explanation:
// // rotate 1 steps to the right: [7,1,2,3,4,5,6]
// // rotate 2 steps to the right: [6,7,1,2,3,4,5]
// // rotate 3 steps to the right: [5,6,7,1,2,3,4]
// const nums = [ 1, 2, 3, 4, 5, 6, 7 ];
// const k = 3;

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
const nums = [ -1, -100, 3, 99 ];
const k = 2;

// // console.log('duplicateNums:', duplicateNums);
// // console.log('duplicateNums[3]:', duplicateNums[3]);

// duplicateNums[(3 + 0) % length] = nums[0 + 0];
// duplicateNums[(3 + 1) % length] = nums[0 + 1];
// duplicateNums[(3 + 2) % length] = nums[0 + 2];
// // duplicateNums[3 + 3] = nums[0 + 3];
// duplicateNums[(3 + 3) % length] = nums[0 + 3];
// duplicateNums[(3 + 4) % length] = nums[0 + 4];
// duplicateNums[(3 + 5) % length] = nums[0 + 5];
// duplicateNums[(3 + 6) % length] = nums[0 + 6];
// // console.log('nums[0 + 3]:', nums[0 + 3]);
// // duplicateNums[(3 + 4) % 6] = nums[0 + 4]; // ?
// console.log('duplicateNums:', duplicateNums);

// // console.log('nums:', nums, 'k:', k);
// console.log('answer:', [ 5, 6, 7, 1, 2, 3, 4 ]);
// console.log('length:', length);
// // console.log('=====');

var rotate = function(nums, k) {
	const length = nums.length;
	let duplicateNums = new Array(length);

	for (let index = 0; index < length; index++) {
		// console.log('index:', index);
		// console.log('index+k:', index + k);
		// console.log('(index + k) % length:', (index + k) % length);

		duplicateNums[(index + k) % length] = nums[index];
	}
	console.log('duplicateNums:', duplicateNums);
};
rotate(nums, k);
