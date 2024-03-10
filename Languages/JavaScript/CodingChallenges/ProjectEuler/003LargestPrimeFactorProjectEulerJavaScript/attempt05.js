// attempt05.js

// num = 600851475143; // the given number
num = 13195; // the given number
list_of_primes_from_given_number = [];
// num = 10;
// num = 5;

// // ***********************************
// // determining if index is prime
// // *** I don't think I need this. ***
// for (let index01 = 1; index01 <= num; index01++) {
// 	t = 0;
// 	for (let index02 = 1; index02 < index01; index02++) {
// 		// console.log('index01:', index01, 'index02:', index02, 'index01/index02:', index01 / index02);
// 		if (Number.isInteger(index01 / index02)) t++;
// 	}
// 	console.log('t:', t, 'index01:', index01);
// 	console.log('-----');
// }

// ***********************************
// generating a list of prime numbers
// N = 100;
N = num;
compete_list_of_prime_numbers = [];
for (let index03 = 2; index03 <= N; index03++) {
	tempArray = [];
	// t = 0;
	for (let index04 = 1; index04 < index03; index04++) {
		// console.log('index03:', index03, 'index04:', index04, 'index03/index04:', index03 / index04);
		if (Number.isInteger(index03 / index04)) {
			// console.log(index03 / index04);
			// console.log('index03:', index03, 'index04:', index04, 'index03/index04:', index03 / index04);
			tempArray.push(index03 / index04);
		}
	}
	// console.log('index03:', index03, 'tempArray:', tempArray);

	if (tempArray.length < 2) compete_list_of_prime_numbers.push(tempArray[0]);
	// console.log('-----');
}
// console.log(compete_list_of_prime_numbers);

// // ***********************************
// // *** I don't think I need this. ***
// for (let index05 = 1; index05 < num; index05++) {
// 	// console.log('index05:', index05);
// 	for (let index06 = 1; index06 < index05; index06++) {
// 		// console.log('index06:', index06);
// 		// console.log(index06);
// 		console.log(index05 / index06);
// 		// if (Number.isInteger(index05 / index06)) {
// 		// 	console.log(index05 / index06);
// 		// 	break;
// 		// }
// 	}
// 	console.log('-----');
// }

// ***********************************
// finding the first integer from num
console.log('num:', num);
compete_list_of_prime_numbers.every((element) => {
	if (Number.isInteger(num / element)) {
		value = num / element;
		if (value === 1) {
			console.log(element, 'is prime!');
			list_of_primes_from_given_number.push(element);
		}
		return false;
	}
	console.log(element);
	return true;
});
console.log('the first integer from 13195 is:', value);
console.log('-----');

// ***********************************
// finding the first integer from 2639
console.log('for 2639:', 2639);
compete_list_of_prime_numbers.every((element) => {
	if (Number.isInteger(2639 / element)) {
		value = 2639 / element;
		console.log('the new number:', value);
		if (value === 1) {
			console.log(element, 'is prime!');
			list_of_primes_from_given_number.push(element);
		}
		return false;
	}
	console.log(element);
	return true;
});
console.log('the first integer from 2639:', value);
console.log('-----');

// ***********************************
// finding the first integer from 2639
console.log('for 377:', 377);
compete_list_of_prime_numbers.every((element) => {
	if (Number.isInteger(377 / element)) {
		value = 377 / element;
		console.log('the new number:', value);
		if (value === 1) {
			console.log(element, 'is prime!');
			list_of_primes_from_given_number.push(element);
		}
		return false;
	}
	console.log(element);
	return true;
});
console.log('the first integer from 377:', value);
console.log('-----');

// ***********************************
// finding the first integer from 377
console.log('for 29:', 29);
compete_list_of_prime_numbers.every((element) => {
	if (Number.isInteger(29 / element)) {
		value = 29 / element;
		console.log('the new number:', value);
		if (value === 1) {
			console.log(element, 'is prime!');
			list_of_primes_from_given_number.push(element);
		}
		return false;
	}
	console.log('element:', element);
	return true;
});
console.log('the first integer from 29:', value);
console.log('-----');

// console.log('-----');
console.log('-----');

// console.log(13195 / 2);
// console.log(13195 / 3);
// console.log(13195 / 5); // an integer
// console.log('-----');

// // now we test 2639 to see if it is a prime
// console.log(2639 / 2);
// console.log(2639 / 3);
// console.log(2639 / 5);
// console.log(2639 / 7); // an integer. so 2639 is not prime.
// console.log('-----');

// now we test 377 to see if it is a prime
console.log(377 / 2);
console.log(377 / 3);
console.log(377 / 5);
console.log(377 / 7);
console.log(377 / 11);
console.log(377 / 13); // an integer. so 377 is not prime.
console.log('-----');

// // now we test 29 to see if it is a prime
// console.log(29 / 2);
// console.log(29 / 3);
// console.log(29 / 5);
// console.log(29 / 7);
// console.log(29 / 11);
// console.log(29 / 13);
// console.log(29 / 17);
// console.log(29 / 19);
// console.log(29 / 23);
// console.log(29 / 29);
// console.log('-----');

// console.log(compete_list_of_prime_numbers[1444]);
console.log('list_of_primes_from_given_number:', list_of_primes_from_given_number);
