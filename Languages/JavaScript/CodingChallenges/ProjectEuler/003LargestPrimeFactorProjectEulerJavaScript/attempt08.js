// attempt08.js

const num = 600851475143; // the given number
// const num = 13195; // the given number
// const list_of_prime_numbers = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ];
// const list_of_prime_numbers = [
// 	2,
// 	3,
// 	5,
// 	7,
// 	11,
// 	13,
// 	17,
// 	19,
// 	23,
// 	29,
// 	31,
// 	37,
// 	41,
// 	43,
// 	47,
// 	53,
// 	59,
// 	61,
// 	67,
// 	71,
// 	73,
// 	79,
// 	83,
// 	89,
// 	97,
// 	101,
// 	103,
// 	107,
// 	109,
// 	113,
// 	127,
// 	131,
// 	137,
// 	139,
// 	149,
// 	151,
// 	157,
// 	163,
// 	167,
// 	173,
// 	179,
// 	181,
// 	191,
// 	193,
// 	197,
// 	199,
// 	211,
// 	223,
// 	227,
// 	229,
// 	233,
// 	239,
// 	241,
// 	251,
// 	257,
// 	263,
// 	269,
// 	271,
// 	277,
// 	281,
// 	283,
// 	293,
// 	307,
// 	311,
// 	313,
// 	317,
// 	331,
// 	337,
// 	347,
// 	349,
// 	353,
// 	359,
// 	367,
// 	373,
// 	379,
// 	383,
// 	389,
// 	397,
// 	401,
// 	409,
// 	419,
// 	421,
// 	431,
// 	433,
// 	439,
// 	443,
// 	449,
// 	457,
// 	461,
// 	463,
// 	467,
// 	479,
// 	487,
// 	491,
// 	499,
// 	503,
// 	509,
// 	521,
// 	523,
// 	541,
// ];
// const compete_list_of_prime_numbers = list_of_prime_numbers; // for when I am not generating the list of prime numbers.
let theList = [];
let tempNum = num;
let counter = 0;

// ***********************************
// generating a list of prime numbers
// N = 100;
// N = num;
N = num / 10000000;
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
	// console.log('test');
	if (Number.isInteger(num / el)) {
		console.log('The first prime is:', el); // 5
		theList.push(el);
		break;
	}
}
// console.log('theList[counter]:', theList[counter]);
// console.log('====');
// console.log('====');

// while (tempNum != 1) {
while (counter < 12) {
	console.log('tempNum first:', tempNum); // 13195 // 2639
	// console.log('theList[counter]:', theList[counter]); // 5 undefined
	tempNum = tempNum / theList[counter];
	// console.log('tempNum / el:', tempNum / 7);

	for (const el of compete_list_of_prime_numbers) {
		// console.log('Line 160:', el);
		if (Number.isInteger(tempNum / el)) {
			console.log('The next prime is:', el);
			theList.push(el);

			break;
		}
	}

	console.log('tempNum second:', tempNum); // 2639
	// console.log('theList[counter]:', theList[counter]); // 5
	// console.log('====');
	// console.log('counter:', counter); // 0
	counter++;
	// console.log('counter:', counter); // 1

	// console.log('====');
	// console.log('====');
}

console.log('The list of prime numbers for:', num, ':', theList);
