// Pair programming with Dylan and Jamie
// url: https://projecteuler.net/problem=1

// Problem statement
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let x = 0;

for (i = 0; i < 1000; i++) {
	if (i % 3 == 0 || i % 5 == 0) {
		x += i;
		// console.log(i);
	}
	console.log('when i is: ', i, 'x is: ', x);
	// console.log(x);
}

console.log(x);
