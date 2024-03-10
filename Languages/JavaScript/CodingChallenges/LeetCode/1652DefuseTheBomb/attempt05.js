// attempt05.js

// // Example 1:
// // Input: code = [5,7,1,4], k = 3
// // Output: [12,10,16,13]
// // Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
// const code = [ 5, 7, 1, 4 ];
// const k = 3;

// // Example 2:
// // Input: code = [1,2,3,4], k = 0
// // Output: [0,0,0,0]
// // Explanation: When k is zero, the numbers are replaced by 0.
// const code = [ 1, 2, 3, 4 ];
// const k = 0;

// Example 3:
// Input: code = [2,4,9,3], k = -2
// Output: [12,5,6,13]
// Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.
const code = [ 2, 4, 9, 3 ];
const k = -2;

var decrypt = function(code, k) {
	console.log('original array:', code, 'original k:', k);
	console.log('=======');
	var tempArr = [];

	for (let i = 0; i < code.length; i++) tempArr[i] = 0;

	if (k > 0) {
		for (let index = 0; index < code.length; index++) {
			for (let j = 1; j <= k; j++) {
				// console.log('j', j);
				// console.log('index', index);
				// console.log('code.length', code.length);
				// tempArr[(0 + index) % code.length] += code[(j + index) % code.length];
				tempArr[0 + index] += code[(j + index) % code.length];

				// tempArr[(0 + index) % code.length] =
				// 	code[(1 + index) % code.length] + code[(2 + index) % code.length] + code[(3 + index) % code.length];
			}
		}
		// }

		// tempArr[(0 + 0) % code.length] =
		// 	code[(1 + 0) % code.length] + code[(2 + 0) % code.length] + code[(3 + 0) % code.length];
		// tempArr[(0 + 1) % code.length] =
		// 	code[(1 + 1) % code.length] + code[(2 + 1) % code.length] + code[(3 + 1) % code.length];
		// tempArr[(0 + 2) % code.length] =
		// 	code[(1 + 2) % code.length] + code[(2 + 2) % code.length] + code[(3 + 2) % code.length];
		// tempArr[(0 + 3) % code.length] =
		// 	code[(1 + 3) % code.length] + code[(2 + 3) % code.length] + code[(3 + 3) % code.length];
	} else if (k < 0) {
		console.log('do this');
		console.log('try to omit this condition');
		// 	// for (let index = 0; index < code.length; index++) {
		// 	// 	tempArr[(0 + index) % code.length] =
		// 	// 		code[(1 + index) % code.length] + code[(2 + index) % code.length] + code[(3 + index) % code.length];
		// 	// }

		for (let l = 0; l < code.length; l++) {
			// tempArr[0 + l] = code[(2 + l) % code.length] + code[(3 + l) % code.length];

			// for (let m = 2; m <= 3; m++) {
			for (let m = (code.length + k) % code.length; m <= (code.length + k) % code.length + (-k - 1); m++) {
				// console.log('m', m);
				// console.log('l', l);
				// console.log('code.length', code.length);
				// console.log('tempArr', tempArr);
				tempArr[0 + l] += code[(m + l) % code.length];

				// tempArr[0 + l] += code[(2 + l) % code.length];
				// tempArr[0 + l] += code[(3 + l) % code.length];
			}
		}

		// tempArr[0] = code[2] + code[3]; // 9 + 3
		// tempArr[1] = code[3] + code[0]; // 3 + 2
		// tempArr[2] = code[0] + code[1]; // 2 + 4
		// tempArr[3] = code[1] + code[2]; // 4 + 9
	}

	console.log('tempArr:', tempArr);
};

decrypt(code, k);
