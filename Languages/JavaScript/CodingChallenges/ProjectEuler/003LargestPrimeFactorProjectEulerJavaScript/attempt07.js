// attempt07.js

const num = 13195;
const list_of_prime_numbers = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ];
// const compete_list_of_prime_numbers = list_of_prime_numbers; // for when I am not generating the list of prime numbers.
let theList = [];
let tempNum = num;
let counter = 0;

// ***********************************
// generating a list of prime numbers
// N = 100;
N = num;
let compete_list_of_prime_numbers = [];
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
console.log(compete_list_of_prime_numbers);
// ***********************************

// ***********************************
// calculations

for (const el of compete_list_of_prime_numbers) {
	if (Number.isInteger(num / el)) {
		console.log('The first prime is:', el); // 5
		theList.push(el);
		break;
	}
}
console.log('theList[counter]:', theList[counter]);
// console.log('====');
// console.log('====');

while (tempNum != 1) {
	// while (counter < 5) {
	console.log('tempNum:', tempNum); // 13195 // 2639
	// console.log('theList[counter]:', theList[counter]); // 5 undefined
	tempNum = tempNum / theList[counter];
	// console.log('tempNum / el:', tempNum / 7);

	for (const el of compete_list_of_prime_numbers) {
		if (Number.isInteger(tempNum / el)) {
			console.log('The next prime is:', el);
			theList.push(el);

			break;
		}
	}

	console.log('tempNum:', tempNum); // 2639
	// console.log('theList[counter]:', theList[counter]); // 5
	// console.log('====');
	// console.log('counter:', counter); // 0
	counter++;
	// console.log('counter:', counter); // 1

	// console.log('====');
	// console.log('====');
}

console.log('The list of prime numbers for:', num, ':', theList);
