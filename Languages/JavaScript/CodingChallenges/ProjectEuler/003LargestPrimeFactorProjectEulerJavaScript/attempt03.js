// // attempt03.js

// The simplest primality test is trial division: given an input number, n, check whether it is evenly divisible by any prime number between 2 and √n (i.e. that the division leaves no remainder). If so, then n is composite. Otherwise, it is prime.

// arr = [];
// n = 13195;
// // n = 20;
// for (let index = 0; index < n; index++) {
// 	if (Number.isInteger(n / index)) {
// 		console.log(index, ' is a factor');
// 		arr.push(index);
// 		// return;
// 	}
// }
// console.log('The factors of ', n, 'are', arr);

// console.log('-----------');
arr = [];
n = 13195;

for (var i = n - 1; i >= 0; i--) {
	// console.log(i);
	// console.log(n / i);
	// console.log(arr[i]);
	if (Number.isInteger(n / i)) {
		// console.log(i, ' is a factor');
		arr.push(i);
		// break;
	}
}
console.log('The factors of ', n, 'are', arr);
console.log('Now we check each of them to see if they are prime.');
console.log('-----------');

arr = [];
n = 2639;

for (var i = n - 1; i >= 0; i--) {
	// console.log(i);
	// console.log(n / i);
	// console.log(arr[i]);
	if (Number.isInteger(n / i)) {
		// console.log(i, ' is a factor');
		arr.push(i);
		break;
		// return;
	}
}
console.log('The factors of ', n, 'are', arr);

arr = [];
n = 377;

for (var i = n - 1; i >= 0; i--) {
	// console.log(i);
	// console.log(n / i);
	// console.log(arr[i]);
	if (Number.isInteger(n / i)) {
		// console.log(i, ' is a factor');
		arr.push(i);
		break;
		// return;
	}
}
console.log('The factors of ', n, 'are', arr);

arr = [];
n = 29;

for (var i = n - 1; i >= 0; i--) {
	// console.log(i);
	// console.log(n / i);
	// console.log(arr[i]);
	if (Number.isInteger(n / i)) {
		// console.log(i, ' is a factor');
		arr.push(i);
		break;
		// return;
	}
}
console.log('The factors of ', n, 'are', arr);

console.log('-----------');

console.log('-----------');

arr = [];
n = 1885;

for (var i = n - 1; i >= 0; i--) {
	// console.log(i);
	// console.log(n / i);
	// console.log(arr[i]);
	if (Number.isInteger(n / i)) {
		// console.log(i, ' is a factor');
		arr.push(i);
		// break;
		// return;
	}
}
console.log('The factors of ', n, 'are', arr);

console.log('-----------');

console.log('-----------');

// arr = [];
// n = 1015;

// for (var i = n - 1; i >= 0; i--) {
// 	// console.log(i);
// 	// console.log(n / i);
// 	// console.log(arr[i]);
// 	if (Number.isInteger(n / i)) {
// 		// console.log(i, ' is a factor');
// 		arr.push(i);
// 		break;
// 		// return;
// 	}
// }
// console.log('The factors of ', n, 'are', arr);

// arr = [];
// n = 203;

// for (var i = n - 1; i >= 0; i--) {
// 	// console.log(i);
// 	// console.log(n / i);
// 	// console.log(arr[i]);
// 	if (Number.isInteger(n / i)) {
// 		// console.log(i, ' is a factor');
// 		arr.push(i);
// 		break;
// 		// return;
// 	}
// }
// console.log('The factors of ', n, 'are', arr);

// console.log('-----------');

// console.log('-----------');

// console.log('-----------');

// console.log('-----------');

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
