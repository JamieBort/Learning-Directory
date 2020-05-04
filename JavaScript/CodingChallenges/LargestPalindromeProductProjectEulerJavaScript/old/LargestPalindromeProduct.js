// from: https://projecteuler.net/problem=4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// from: https://projecteuler.net/problem=4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// console.log(99*99);
// We want to list all numbers less than 99x99=9801 that read the same both forwards and backwards. So we want to list all the two digit numbers and then cancatinate them so that we have two 2-digit numbers.

// Create an array consisting of the integers from 0 to 1000.
var array = [];
for (i=0; i<1000; i++) {
	if (i<10) {
		array.push("0" + i);
	} else {
		array.push(i);
	}
}
console.log(array);

// Create a function that swaps the two integers of a 2-integer number.
function reverse_a_number(n) {
	n = n + "";
	return n.split("").reverse().join("");
}

// Create a second array that is identicle to teh first, except the two integers have been swapped using the function above.
var array2 = [];
for (i=0; i<1000; i++) {
	array2.push(reverse_a_number(array[i]));
}
console.log(array2);

// Create an array from the first two arrays such that all the elements consists of palindromes.
var array3 = [];
for (j=0; j<array.length; j++) {
	array3.push(array[j]+array2[j]);
}
console.log(array3);

// Create an array that consists of products of the elemtns of array4 times the elemtns of array4.
var array4 = [];
for (i=0; i<50; i++) {
	for (k=0; k<50; k++) {
		array4.push(array3[i]*array3[k]);
	}
}
console.log(array4);

// need to remove reduncancies. Such as all the zeros.
// search for a zero
// if it exists, push it into the new array
// search for a '1' 
// if it exists, push it into the new array
// etc.

// Remove the duplicats of the elements of array4.
var array5 = [];
for (i=0; i <= array4[array4.length-1]; i++) {
	if (array4.indexOf(i) != -1) {
		// console.log("there Exsits a " + i);
		array5.push(i);
	}
}
console.log(array5);

// Need to compare the elemetns in array3 to the elements in array5
var array6 = [];
for (i=0; i<array3.length; i++) {
    for (k=0; k<array5.length; k++) {
        if (array3[i] == array5[k]) {
            // console.log("hello")
            array6.push(array3[i]);
        }
    }
}
console.log(array6);