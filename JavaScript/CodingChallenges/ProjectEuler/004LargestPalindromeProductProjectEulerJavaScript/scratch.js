// scratch.js

let num1 = 999;
let num2 = 999;

// // reverse the number
// result= reverseNumber(num1 * num2);
// result = reverseNumber(12345);
result = reverseNumber(num1 * num2);

testPalindrome(num1 * num2, result);

function reverseNumber(param) {
	let temp = param;
	let backward = 0;
	console.log('The original:', temp);
	while (temp != 0) {
		backward += temp % 10; // add 5 to backward
		temp = (temp - temp % 10) / 10; // remove 5 from temp
		if (temp != 0) backward *= 10; // temp still has digits, so make room
		// console.log('temp:', temp);
		// console.log('backward:', backward);
		// console.log('=======');
	}
	// console.log('temp:', temp);
	// console.log('backward:', backward);
	console.log('The reversed:', backward);
	return backward;
}

function testPalindrome(param1, param2) {
	// console.log('param1', param1);
	// console.log('param2', param2);
	if (param1 === param2) console.log('We have a winner. STOP.');
	else {
		console.log('we have a loser');
		console.log('==============');
		changeNums(num1, num2);
	}
}

// iteratively diminishing the two numbers.
function changeNums(param1, param2) {
	console.log('param1', param1);
	console.log('param2', param2);
	if (param1 === param2) param1 -= 1;
	else param2 -= 1;
	console.log('param1', param1);
	console.log('param2', param2);
}
