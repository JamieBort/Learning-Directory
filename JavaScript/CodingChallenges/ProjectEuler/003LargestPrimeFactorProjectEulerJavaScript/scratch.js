let num = 13195;
let list_of_prime_numbers = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ];

// finding the first integer
list_of_prime_numbers.every((element) => {
	// if (element == 7) return false;
	if (Number.isInteger(num / element)) {
		console.log('winner:', num / element);
		return false;
	}

	console.log(element);
	return true;
});

console.log(num / 2);
console.log(num / 3);
console.log(num / 5); // 5 and 2639

console.log(2639 / 7);

console.log(377 / 13);
console.log(29 / 29);
