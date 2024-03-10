// attempt02.js

// console.log(13195 / 29);

// Calculating the prime factors of 10
// n = 13195;
n = 2639;
// n = 120;
arr = [];
for (i = 0; i < n; i++) {
	// 120/119, 120/118, etc.
	// console.log(n / (n - i));

	// // produces factors of n / (n - i)
	// if (Number.isInteger(n / (n - i))) console.log(n / (n - i));

	// // produces even factors of n / (n - i)
	// if ((n / (n - i)) % 2 === 0) console.log(n / (n - i));

	// if ((n / (n - i)) % 2 != 0) console.log(n / (n - i));

	// // produces odd factors of n / (n - i)
	if ((n / (n - i)) % 2 != 0 && Number.isInteger(n / (n - i))) {
		result = n / (n - i);
		// console.log(result);
		arr.push(result);
	}
	// console.log(arr);
}
console.log('These elements divide', n, 'evenly:', arr);

// Now, for the elements of arr, are they prime or not?

// console.log('last element:', arr[arr.length - 1]);

// for (j = 1; j <= arr.length; j++) {
// 	console.log(arr[arr.length - 1] / arr[arr.length - j]);
// }

// console.log('======');

// console.log(arr[arr.length - 1] / arr[arr.length - 1]);
// console.log(arr[arr.length - 1] / arr[arr.length - 2]);
// console.log(arr[arr.length - 1] / arr[arr.length - 3]);
// console.log(arr[arr.length - 1] / arr[arr.length - 4]);

// 	// 	Iterate through the array.
// for (j = 1; j <= arr.length; j++) {
// 	// 	console.log(arr[arr.length - j]);
// 	console.log(arr[arr.length - j] / 5);
// }

// Check whether 5 is a factor of 15, whether 3 is a factor of 15, etc.
console.log(15 / 5); // 5 is a factor of 15.
console.log((15 / 5) % 2 === 0);
console.log((15 / 5) % 2);

console.log(15 / 3); // 3 is a factor of 15.

// So 15 is the largest prime factor of the number 120

// Check whether 3 is a factor of 5, whether 1 is a factor of 5, etc.
