// attempt02.js

// console.log(13195 / 29);

// Calculating the prime factors of 10
n = 13195;
// n = 120;
arr = [];
for (i = 0; i < n; i++) {
	// console.log(n / (n - i));
	// if (Number.isInteger(n / (n - i))) console.log(n / (n - i));
	// if ((n / (n - i)) % 2 === 0) console.log(n / (n - i));

	if ((n / (n - i)) % 2 != 0 && Number.isInteger(n / (n - i))) {
		result = n / (n - i);
		// console.log(result);
		arr.push(result);
	}
	// console.log(arr);
}
console.log('These elemens divide', n, 'evenly:', arr);

// console.log('last element:', arr[arr.length - 1]);

// for (j = 1; j <= arr.length; j++) {
// 	console.log(arr[arr.length - 1] / arr[arr.length - j]);
// }

console.log('======');

// console.log(arr[arr.length - 1] / arr[arr.length - 1]);
// console.log(arr[arr.length - 1] / arr[arr.length - 2]);
// console.log(arr[arr.length - 1] / arr[arr.length - 3]);
// console.log(arr[arr.length - 1] / arr[arr.length - 4]);

for (j = 1; j <= arr.length; j++) {
	console.log(arr[arr.length - j] / 5);
}
