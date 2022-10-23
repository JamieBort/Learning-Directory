// attempt05.js

// num = 600851475143;
num = 13195;
// num = 10;
// num = 5;

// // ***********************************
// // determining if index is prime
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
list_of_prime_numbers = [];
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

	if (tempArray.length < 2) list_of_prime_numbers.push(tempArray[0]);
	// console.log('-----');
}
// console.log(list_of_prime_numbers);

// ***********************************
// ?????
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

// // // ***********************************
// // //
// use a for each to iterate through list_of_prime_numbers
// for (let index07 = 1; index07 < list_of_prime_numbers; index07++) {
for (let index07 = 1; index07 < list_of_prime_numbers[10]; index07++) {
	console.log('num:', num, 'index07:', index07);
	console.log(num / index07);
	console.log('-----');
}

// console.log(13195 / 2);
// console.log(13195 / 3);
// console.log(13195 / 5); // an integer
// console.log('-----');

// // now we test 13195 to see if it is a prime
// console.log(2639 / 2);
// console.log(2639 / 3);
// console.log(2639 / 5);
// console.log(2639 / 7); // an integer
// console.log('-----');

// // now we test 377 to see if it is a prime
// console.log(377 / 2);
// console.log(377 / 3);
// console.log(377 / 5);
// console.log(377 / 7);
// console.log(377 / 11);
// console.log(377 / 13); // an integer
// console.log('-----');

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

// console.log(list_of_prime_numbers[1444]);
