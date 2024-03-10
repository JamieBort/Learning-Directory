// attempt04.js

// n = 13195;
n = 13197;
// n = 600851475143;
// function for finding factors
function FindFactors(num) {
	arr = [];
	for (var i = num - 1; i >= 0; i--) {
		// console.log(i);
		// console.log(n / i);
		// console.log(arr[i]);
		if (Number.isInteger(num / i)) {
			// console.log(i, ' is a factor');
			arr.push(i);
		}
	}
	// console.log('The factors of ', num, 'are', arr);
	// return num;
	return arr;
}
arrayOfN = FindFactors(n);
console.log(arrayOfN);
console.log('Now we check each of them to see if they are prime.');
console.log('-----------');

for (let index = 0; index < arrayOfN.length; index++) {
	// const element = array[index];
	// FindFactors(arrayOfN[index]);
	if (FindFactors(arrayOfN[index]).length === 1) console.log(arrayOfN[index]);
}

// FindFactors(arrayOfN[0]);
// FindFactors(arrayOfN[1]);
// FindFactors(arrayOfN[2]);
// FindFactors(arrayOfN[3]);
// FindFactors(arrayOfN[4]);

// FindFactors(arrayOfN[5]);
// FindFactors(arrayOfN[6]);
// FindFactors(arrayOfN[7]);
// FindFactors(arrayOfN[8]);
// FindFactors(arrayOfN[9]);

// FindFactors(arrayOfN[10]);
// FindFactors(arrayOfN[11]);
// FindFactors(arrayOfN[12]);
// FindFactors(arrayOfN[13]);
// FindFactors(arrayOfN[14]);
