// from: https://projecteuler.net/problem=3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

var array = [];
for (i = 0; i < 13195; i++) {
	// var array = [];
	if (13185 % i === 0) {
		array.push(i);
		// console.log(array[i]);
		// console.log(array(i));

		// var array2 = [7];
		// for (j = 0; j < array.length; j++) {
		//     if (array(i) % j === 0) {
		//         array2.push(j);
		//     }
		// }

		// console.log(array[i]);
	}

	//  var array2 = [];
	//     for (j = 0; j < array.length; j++) {
	//         if (array[i] % j === 0) {
	//             // array2.push(j);
	//             console.log(array[i]);

	//         }
	//         console.log("hello");
	//     }
}
// console.log(array);
// console.log(array[0]);

// var array2 = [];
// for (j = 0; j < array.length; j++) {
//     if (array[i] % j === 0) {
//         array2.push(j);
//     }
// }
// console.log(array2);

// ============================

var array = [];
for (i = 0; i < 25; i++) {
	array.push(i);
}
console.log(array);
console.log(array.length);
// console.log(array[49]);
console.log(array[array.length - 1]);
console.log(array[array.length - 13]);

console.log(array[array.length - 1] % array[array.length - 13]);

array.splice(12, 1);
console.log(array);
// array.forEach(function() {

// 		console.log(array);
// array.splice(2, 1);
// 		console.log(array);

// 		console.log(array[4]);
// 			if (array[4] % array[2] === 0){
// 		array.splice(4, 1);
// 		console.log(array);
// 			}

// 		console.log(array[5]);
// 	if (array[5] % array[3] === 0){
// 		array.splice(5, 1);
// 		console.log(array);
// 	}

// 		console.log(array[11]);
// 			if (array[11] % array[3] === 0){
// 		array.splice(11, 1);
// 		console.log(array);
// 			}
