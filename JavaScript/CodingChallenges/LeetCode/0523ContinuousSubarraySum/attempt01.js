// attempt01.js

// // Example 1:
// // Input: nums = [23,2,4,6,7], k = 6
// // Output: true
// // Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
// const nums = [ 23, 2, 4, 6, 7 ];
// const k = 6;

// // Example 2:
// // Input: nums = [23,2,6,4,7], k = 6
// // Output: true
// // Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// // 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
// const nums = [ 23, 2, 6, 4, 7 ];
// const k = 6;

// // Example 3:
// // Input: nums = [23,2,6,4,7], k = 13
// // Output: false
// const nums = [ 23, 2, 6, 4, 7 ];
// const k = 13;

// // Example 4:
// // Input: nums = [5,0,0,0], k = 3
// // Output: true
// const nums = [ 5, 0, 0, 0 ];
// const k = 3;

// Example 5:
// Input: nums = [23,2,6,4,7], k = 13
// Output: false
const nums = [ 23, 2, 6, 4, 7 ];
const k = 13;

var checkSubarraySum = function(nums, k) {
	console.log('nums', nums, 'k', k);
	let sum = nums[0] + nums[1];
	console.log('sum', sum);

	for (let j = 0; j < nums.length - 2; j++) {
		for (let index = 0; index < nums.length - j; index++) {
			sum += nums[index + j];
			console.log('sum', sum, 'j', j);
			// console.log('nums[index]', nums[index]);
			// console.log('nums[index+1]', nums[index + 1]);
			// console.log('------');
			// if (nums[index] + nums[index + 1] === k) return true;
			// if ((nums[index+0] + nums[index + 1]) % k === 0) return true;
			// if (sum % k === 0) return true;
			if (Number.isInteger(sum % k)) return true;
		}

		// for (let index = 0; index < nums.length - 2; index++) {
		// 	if ((nums[index] + nums[index + 1] + nums[index + 2]) % k === 0) return true;
		// }

		// for (let index = 0; index < nums.length - 3; index++) {
		// 	if ((nums[index] + nums[index + 1] + nums[index + 2] + nums[index + 3]) % k === 0) return true;
		// }

		// for (let index = 0; index < nums.length - 4; index++) {
		// 	if ((nums[index] + nums[index + 1] + nums[index + 2] + nums[index + 3] + nums[index + 4]) % k === 0) return true;
		// }
	}

	// for (let index = 0; index < nums.length - 4; index++) {
	// 	if ((nums[index] + nums[index + 1] + nums[index + 2] + nums[index + 3] + nums[index + 4]) % k === 0)
	// 		return true;
	// }

	// console.log('test', (5 + 0) % 3 == 0);
	// console.log('test', Number.isInteger((5 + 0) % 3));

	return false;
};
// checkSubarraySum(nums, k);
console.log(checkSubarraySum(nums, k));
