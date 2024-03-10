// scratch.js

const num = 600851475143; // the given number
// const num = 13195; // the given number
let tempNum = num;
console.log('tempNum:', tempNum);

console.log(tempNum / 2);
console.log(tempNum / 3);
console.log(tempNum / 5);

// const list_of_prime_numbers = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ];
// let theList = [];
// let tempNum = num;
// let counter = 0;

// for (const el of list_of_prime_numbers) {
// 	if (Number.isInteger(num / el)) {
// 		console.log('The first prime is:', el); // 5
// 		theList.push(el);
// 		break;
// 	}
// }
// console.log('theList[counter]:', theList[counter]);
// // console.log('====');
// // console.log('====');

// while (tempNum != 1) {
// 	// while (counter < 5) {
// 	console.log('tempNum:', tempNum); // 13195 // 2639
// 	// console.log('theList[counter]:', theList[counter]); // 5 undefined
// 	tempNum = tempNum / theList[counter];
// 	// console.log('tempNum / el:', tempNum / 7);

// 	for (const el of list_of_prime_numbers) {
// 		if (Number.isInteger(tempNum / el)) {
// 			console.log('The next prime is:', el);
// 			theList.push(el);

// 			break;
// 		}
// 	}

// 	console.log('tempNum:', tempNum); // 2639
// 	// console.log('theList[counter]:', theList[counter]); // 5
// 	// console.log('====');
// 	// console.log('counter:', counter); // 0
// 	counter++;
// 	// console.log('counter:', counter); // 1

// 	// console.log('====');
// 	// console.log('====');
// }

// console.log('The list of prime numbers for:', num, ':', theList);
