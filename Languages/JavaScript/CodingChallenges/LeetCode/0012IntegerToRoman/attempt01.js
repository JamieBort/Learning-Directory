// attempt01.js

// // Example 1:
// // Input: num = 3
// // Output: "III"
// // Explanation: 3 is represented as 3 ones.
// const num = 3;
// const expected = 'III';

// Example 2:
// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
const num = 58;
const expected = 'LVIII';

// // Example 3:
// // Input: num = 1994
// // Output: "MCMXCIV"
// // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// const num = 1994;
// const expected = 'MCMXCIV';

// Key:
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var intToRoman = function(num) {
	console.log('num:', num);
	let romanNumeral = '';
	let arr = [];
	let temp = num;
	// temp *= 4;
	// console.log('temp:', temp);
	// console.log('num:', num);

	// first need to pars num:
	// for (let index = 0; index < num.toString().length; index++) {
	// 	arr[index] = num % 10;
	// }

	// stop when temp =0
	arr[0] = temp % 10;
	console.log('arr:', arr);
	console.log('======');

	console.log('temp:', temp);
	temp = (temp - temp % 10) / 10;
	console.log('temp:', temp);

	arr[1] = temp;
	console.log('arr:', arr);
	console.log('======');

	console.log('temp:', temp);
	temp = (temp - temp % 10) / 10;
	console.log('temp:', temp);

	arr[2] = temp;
	console.log('arr:', arr);
	console.log('======');

	if (arr[0] < 4) console.log('do one thing');
	else if ((arr[0] = 4)) console.log('do something else');
	else if ((arr[0] = 5)) console.log('do something else');
	else console.log('do something else');

	// *****************
	// Use switch case for general
	// *****************

	//
	// // talley or compile the romanNumeral
	// for (let index = 0; index < arr[0]; index++) {
	// 	romanNumeral += 'I';
	// 	// console.log('romanNumeral:');
	// }
	// console.log('romanNumeral:', romanNumeral);

	// // const numeral = 'Papayas';
	// // const numeral = 'beans';
	// const numeral = 'I';
	// switch (numeral) {
	// 	//              1
	// 	// V             5
	// 	// X             10
	// 	// L             50
	// 	// C             100
	// 	// D             500
	// 	// M             1000
	// 	case 'I':
	// 		console.log('I is chosen.');
	// 		break;
	// 	case 'Mangoes':
	// 		console.log('Mangoes and papayas are $2.79 a pound.');
	// 		break;
	// 	case 'Papayas':
	// 		console.log('Papayas and papayas are $2.79 a pound.');
	// 		// expected output: "Mangoes and papayas are $2.79 a pound."
	// 		break;
	// 	default:
	// 		console.log(`Sorry, we are out of ${numeral}.`);
	// }

	// return 'III';
	return romanNumeral;
};

function myTest(param1, param2) {
	if (param1 === param2) console.log('*** IT PASSED ***');
	else console.log('*** IT FAILED ***');
}

// intToRoman(num);
// console.log(intToRoman(num));
myTest(intToRoman(num), expected);
