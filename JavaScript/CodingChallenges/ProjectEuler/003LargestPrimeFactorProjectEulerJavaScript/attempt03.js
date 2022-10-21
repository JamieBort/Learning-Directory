// // attempt03.js

// The simplest primality test is trial division: given an input number, n, check whether it is evenly divisible by any prime number between 2 and √n (i.e. that the division leaves no remainder). If so, then n is composite. Otherwise, it is prime.

arr = [];
// n=13195;
n = 20;
for (let index = 0; index < n; index++) {
	if (Number.isInteger(n / index)) {
		console.log(index, ' is a factor');
		arr.push(index);
		// return;
	}
}
console.log('The factors of ', n, 'are', arr);

console.log('-----------');
var arr = [ 1, 2, 3, 4, 5 ];

for (var i = arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}
// arr = [];
// n = 20;
// for (let index = 0; index < n; index++) {
// 	console.log(n - index);
// 	// if (Number.isInteger(n / (n - index))) {
// 	// 	console.log(n / (n - index), ' is a factor');
// 	// 	arr.push(n / (n - index));
// 	// 	// return;
// 	// }
// }
// console.log('The factors of ', n, 'are', arr);

// arr = [];
// n = 20;

// arr2 = [];
// // for (let index = 0; index < n; index++) {
// // 	// console.log(n - index);
// // 	console.log(n / (n - index));
// // }
// console.log('-----------');
// for (let index = 1; index <= n; index++) {
// 	console.log(n / index);
// }

// for (let index = 0; index < n; index++) {
// 	// if (Number.isInteger(n / index)) {
// 	if (Number.isInteger(n / (n - index))) {
// 		console.log(n / (n - index), ' is a factor');
// 		arr.push(n / (n - index));
// 		// return;
// 	}
// }
// console.log('The factors of ', n, 'are', arr);

// // n = 2639;
// // arr = [];
// // // test n = 2639;
// // for (let index = 0; index < n; index++) {
// // 	if (Number.isInteger(n / index)) {
// // 		console.log(index, ' is a factor');
// // 		arr.push(index);
// // 	}
// // }
// // console.log('The factors of ', n, 'are', arr);

// // n = 377;
// // arr = [];
// // // test n = 2639;
// // for (let index = 0; index < n; index++) {
// // 	if (Number.isInteger(n / index)) {
// // 		console.log(index, ' is a factor');
// // 		arr.push(index);
// // 	}
// // }
// // console.log('The factors of ', n, 'are', arr);

// // n = 29;
// // arr = [];
// // // test n = 2639;
// // for (let index = 0; index < n; index++) {
// // 	if (Number.isInteger(n / index)) {
// // 		console.log(index, ' is a factor');
// // 		arr.push(index);
// // 	}
// // }
// // console.log('The factors of ', n, 'are', arr);
