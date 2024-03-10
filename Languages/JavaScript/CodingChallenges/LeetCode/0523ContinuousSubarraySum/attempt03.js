// attempt03.js

// Example 1:
// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
const nums = [ 23, 2, 4, 6, 7 ];
const k = 6;
const theStatus = true;

// // Example 2:
// // Input: nums = [23,2,6,4,7], k = 6
// // Output: true
// // Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// // 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
// const nums = [ 23, 2, 6, 4, 7 ];
// const k = 6;
// const theStatus = true;

// // Example 3:
// // Input: nums = [23,2,6,4,7], k = 13
// // Output: false
// const nums =[23,2,6,4,7]
// const k = 13
// const theStatus =  false;

// // // Example 4:
// // // Input: nums = [5,0,0,0], k = 3
// // // Output: true
// const nums = [ 5, 0, 0, 0 ];
// const k = 3;
// const theStatus = true;

var checkSubarraySum = function(nums, k) {
	for (let j = 0; j < nums.length - 0; j++) {
		let sum = nums[j];
		console.log('j/sum:', j);
		for (let index = j + 1; index < nums.length - 0; index++) {
			console.log('index = j + 1:', index);
			sum += nums[index];
			console.log('sum:', sum);
			if (sum % k === 0) return true;
			// // if (Number.isInteger(sum % k)) return true;
		}
		console.log('========');
	}
	return false;

	// j =0
	// 5+0? // i=j+1
	// 5+0+0? // i=j+2
	// 5+0+0+0? // i=j+3

	// j =0
	// 0+0? // i=j+1
	// 0+0+0? // i=j+2

	// 0+0?
	// 	console.log('========');
	// 	console.log('========');
	// // j=0,i=j+1
	// let sum = nums[0];
	// console.log(sum + nums[1]);
	// console.log('is ', nums[0] + nums[1], ' a multiple of ', k, '?');
	// // An integer x is a multiple of k if there exists an integer n such that x = n * k.
	// // console.log(5 % k);
	// console.log(5 % k === 0);
	// // j=0,i=j+2
	// console.log(nums[0] + nums[2]);
	// console.log('is  ', nums[0] + nums[2], '  a multiple of ', k, '?');
	// console.log(5 % k === 0);
	// // j=0,i=j+3
	// console.log(nums[0] + nums[3]);
	// console.log('is  ', nums[0] + nums[3], '  a multiple of ', k, '?');
	// console.log(5 % k === 0);
	// // // j=1,i=j+1
	// // let sum = 0;
	// // console.log(nums[1] + nums[2]);
	// // console.log('is  ', nums[1] + nums[2], '  a multiple of ', k, '?');
	// // console.log((nums[1] + nums[2]) % k === 0);
	// // // // j=0,i=j+2
	// // // console.log(nums[0] + nums[2]);
	// // // console.log('is 5 a multiple of ', k, '?');
	// // // console.log(5 % k === 0);
	// // // // j=0,i=j+3
	// // // console.log(nums[0] + nums[3]);
	// // // console.log('is 5 a multiple of ', k, '?');
	// // // console.log(5 % k === 0);
	// 	console.log('========');
	// 	console.log('========');
};

// checkSubarraySum(nums, k);
// console.log(checkSubarraySum(nums, k));
if (checkSubarraySum(nums, k) == theStatus) console.log('solved');
else console.log('not solved. keep trying');
