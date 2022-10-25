// attempt01.js
// console.log(999 * 999);

// The largest number made from the product of two 3-digit numbers is 999 * 999 = 998001.
// Determine the largest palindromic number smaller than 998001.
// Then determine which two 3-digit numbers are the products of that largest palindromic number smaller than 998001.

// // Test to see if the first digit is the same as the last digit of a 5-digit number
// const num = 998001;
// const string = String(num);
// console.log(string[string.length - 1]);
// console.log(string - 1);
// console.log(string[string.length - 1]);

//

let num1 = 999;
let num2 = 999;

function testIfPalindrom(param) {
	console.log('Is', param, 'a palendrom?');

	// ***************
	// Revers the number
	let temp = param;
	let reverse = 0;
	// console.log('the length of temp:', temp.length);
	console.log('temp % 10:', temp % 10);

	reverse += temp % 10; // adding the last digit of reverse // 1
	console.log('reverse:', reverse); // 1
	temp -= temp % 10; // remove the last digit // 1
	// temp -= reverse; // remove the last digit // 1
	console.log('temp:', temp); // 99800
	reverse *= 10;
	console.log('reverse:', reverse); // 10
	console.log('temp % 10:', temp % 10); // 0
	reverse += temp % 10; // adding the last digit of reverse // 0
	console.log('reverse:', reverse); // 0
	temp -= (temp % 10) % 10; // remove the last digit // 0
	console.log('temp:', temp); // 9980

	// reverse -= temp; // removing the last digit of reverse
	// console.log('reverse:', reverse);
	// temp *= 10;
	// console.log('temp:', temp);
	// console.log('------');
	// // temp += reverse % 10; // adding the last digit of reverse
	// // console.log('temp:', temp);
	// // reverse -= temp; // removing the last digit of reverse
	// // console.log('reverse:', reverse);
	// // console.log('reverse:', reverse);

	// ***************
	// the actual test
	if (param === 998002) {
		console.log('Yes.');
	} else {
		console.log('No.');
	}

	// console.log('num1:', num1);
	// console.log('num2:', num2);
	// console.log(num1 * num2);

	// if (true) {
	// 	change();
	// 	testIfPalindrom(num1, num2);
	// } else return;
}

// iteratively diminishing the two numbers.
function change() {
	if (num1 === num2) num1 -= 1;
	else num2 -= 1;
}

testIfPalindrom(num1 * num2);
