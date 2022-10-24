// attempt06.js

// // num = 600851475143; // the given number
// num = 13195; // the given number

// // ***********************************
// // generating a list of prime numbers
// // N = 100;
// N = num;
// compete_list_of_prime_numbers = [];
// for (let index03 = 2; index03 <= N; index03++) {
// 	tempArray = [];
// 	// t = 0;
// 	for (let index04 = 1; index04 < index03; index04++) {
// 		// console.log('index03:', index03, 'index04:', index04, 'index03/index04:', index03 / index04);
// 		if (Number.isInteger(index03 / index04)) {
// 			// console.log(index03 / index04);
// 			// console.log('index03:', index03, 'index04:', index04, 'index03/index04:', index03 / index04);
// 			tempArray.push(index03 / index04);
// 		}
// 	}
// 	// console.log('index03:', index03, 'tempArray:', tempArray);

// 	if (tempArray.length < 2) compete_list_of_prime_numbers.push(tempArray[0]);
// 	// console.log('-----');
// }
// console.log(compete_list_of_prime_numbers);

const num = 13195;
const list_of_prime_numbers = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ];
let theList = [];
let tempNum = num;
let counter = 0;

// for (const el of list_of_prime_numbers) {
// 	if (Number.isInteger(num / el)) {
// 		// console.log(el); // 5
// 		theList.push(el);
// 		break;
// 	}
// }

while (tempNum != 1) {
	// while (counter < 1) {
	// let counter = 0;
	for (const el of list_of_prime_numbers) {
		if (Number.isInteger(num / el)) {
			// console.log(el); // 5
			theList.push(el);
			break;
		}
	}

	// tempNum = tempNum / theList[counter];
	// console.log('tempNum:', tempNum);
	// console.log('counter:', counter);
	// console.log('theList:', theList);
	// console.log('theList[counter]:', theList[counter]);
	// counter++;

	// tempNum = tempNum / theList[counter];

	// // console.log('tempNum:', tempNum);
	// // console.log('-----');
	// for (const el of list_of_prime_numbers) {
	// 	if (Number.isInteger(tempNum / el)) {
	// 		// console.log(el); // 7
	// 		theList.push(el);
	// 		// counter++;
	// 		break;
	// 	}
	// 	// counter++;
	// }
	// // counter++;

	// console.log(num / theList[0]); // 2639
	tempNum = tempNum / theList[0];
	counter++;
	console.log('tempNum:', tempNum); // 2639
	// console.log('counter a:', counter);
	for (const el of list_of_prime_numbers) {
		if (Number.isInteger(tempNum / el)) {
			// console.log(el); // 7

			// console.log('counter b:', counter);

			theList.push(el);
			break;
		}
		// counter++; // very bad place
	}
	console.log('-----');
	// console.log(num / theList[0] / theList[1]); // 377
	tempNum = tempNum / theList[1];
	counter++;
	console.log('tempNum:', tempNum); // 377
	// console.log('counter c:', counter);

	for (const el of list_of_prime_numbers) {
		if (Number.isInteger(tempNum / el)) {
			// console.log(el); // 13
			// console.log('counter d:', counter);
			theList.push(el);
			break;
		}
	}
	console.log('-----');
	// console.log(num / theList[0] / theList[1] / theList[2]); // 29
	tempNum = tempNum / theList[2];
	counter++;
	console.log('tempNum:', tempNum); // 29

	for (const el of list_of_prime_numbers) {
		if (Number.isInteger(tempNum / el)) {
			// console.log(el); // 29
			theList.push(el);
			break;
		}
	}
	console.log('-----');
	// console.log(num / theList[0] / theList[1] / theList[2] / theList[3]); // 1
	tempNum = tempNum / theList[3];
	counter++;
	console.log('tempNum:', tempNum); // 1

	for (const el of list_of_prime_numbers) {
		if (Number.isInteger(tempNum / el)) {
			console.log(el); // ?
			theList.push(el);
			break;
		}
	}
}

console.log(theList);

// console.log(num / 2);
// console.log(num / 3);
// console.log(num / 5); // 2639 left over from 5
// console.log('-----');

// console.log(2639 / 2);
// console.log(2639 / 3);
// console.log(2639 / 5);
// console.log(2639 / 7); // 377 left over from 7
// console.log('-----');

// console.log(377 / 2);
// console.log(377 / 3);
// console.log(377 / 5);
// console.log(377 / 7);
// console.log(377 / 11);
// console.log(377 / 13); // 29 left over from 13
// console.log('-----');

// console.log(29 / 2);
// console.log(29 / 3);
// console.log(29 / 5);
// console.log(29 / 7);
// console.log(29 / 11);
// console.log(29 / 13);
// console.log(29 / 17);
// console.log(29 / 19);
// console.log(29 / 23);
// console.log(29 / 29); // 29=29 so 29 is prime
// console.log('-----');

// // so the primes are 5,7,13,and 29
