// mergeSort

// 1. function to divide the array. Takes in an array as an argument. Divides the array into two arrays of equal length +/- one element. Calls the sorting function on each array half. Returns the array sorted.

// 2. function to sort the array. Takes two arguments, the two arrays generated in the divide function above. Sorts them. Joins them again.

const given_even = [ 14, 33, 27, 10, 35, 19, 42, 44 ];
const given_odd = [ 14, 33, 27, 10, 35, 19, 42, 44, 01 ];
const single = [ 3 ];
const str = 'blah';
const nonsense = NaN;
const in_order = [ 4, 5 ];
const out_of_order = [ 5, 4 ];
const triplet_in_order = [ 4, 5, 6 ];
const triplet_out_of_order = [ 4, 6, 5 ];

// yes or no
checkOrder = (arr) => {
	console.log('checking order: ', arr);
	if (arr[0] < arr[1]) return true;
	else return false;
};

sort = (arr) => {
	// console.log('sorting: ', arr);
	if (arr[0] < arr[1]) {
		console.log('In order. Result: ', arr);
		return arr;
	} else {
		const result = ([ arr[0], arr[1] ] = [ arr[1], arr[0] ]);
		// console.log('Out of order. New result: ', ([ arr[0], arr[1] ] = [ arr[1], arr[0] ]));
		// return ([ arr[0], arr[1] ] = [ arr[1], arr[0] ]);

		console.log('Out of order. New result: ', result);
		return result;
	}
};

// split = (arr) => {
// 	// console.log('the array: ', arr);
// 	if (!Number.isInteger(arr[0])) {
// 		console.log('Not an integer array');
// 		return;
// 	}
// 	const half_length = Math.floor(arr.length / 2);

// 	var indexToSplit = arr.indexOf(arr[half_length]);
// 	// console.log('its: ', indexToSplit);

// 	var first_half = arr.slice(0, indexToSplit);
// 	// console.log('first_half: ', first_half);

// 	var second_half = arr.slice(indexToSplit);
// 	// console.log('second_half: ', second_half);
// 	const output = [ first_half, second_half ];
// 	// console.log('split output: ', output);
// 	// return [ first_half, second_half ];
// 	return output;
// };

split = (arr) => {
	// console.log('the array: ', arr);
	const half_length = Math.ceil(arr.length / 2);
	// const half_length = Math.floor(arr.length / 2);
	var indexToSplit = arr.indexOf(arr[half_length]);
	var first_half = arr.slice(0, indexToSplit);
	var second_half = arr.slice(indexToSplit);
	const output = [ first_half, second_half ];
	// console.log('split output: ', output);
	// return [ first_half, second_half ];
	return output;
};

checkLength_total = (arr) => {
	// console.log('arr[0]: ', arr[0]);
	// console.log('arr[1]: ', arr[1]);
	arr.forEach(element => {
		if (element.length === 1) {
			console.log("length = 1: ", element);
			return true;
		}
		if (element.length > 1) {
			console.log("length > 1: ", element);
			return false;
		}

	});
};

checkLength_individual = (arr) => {
	console.log("checkLength_individual: ", arr)
	if (arr.length === 1) {
			console.log("length = 1: ", arr);
			return true;
		}
	}

function mergeSort(arr) {
	// Need to check to make sure it's an integer array.
	// Or make sure all function calls pass in integer arrays.
	let unsorted_arr=[]
	if (arr.length < 1) console.log('The length is less than 1.');
	else if (arr.length === 1) {
		// push it into the array
		unsorted_arr.push(arr);
		// return arr;
	}
	else if (arr.length === 2) {
		if (checkOrder(arr)) {
			unsorted_arr.push(arr[0]);
			unsorted_arr.push(arr[1]);
			// return arr;
		}
		else {
			const sorted = sort(arr);
			console.log('sorted: ', sorted);
			return sorted;
			// return sort(arr);
		}
	} else if (arr.length > 2) {
		// Need to spit it in two.
		let temp_arr = [];

		const split_result = split(arr);
		console.log('split_result first time', split_result);

		// Need to check length of each half.
		split_result.forEach(element => {
			// Yes? Push it into an array.
			if(checkLength_individual(element)){
				console.log("Yes")
				temp_arr.push(element)
			}
			// No? Split it again.
			else  {
				console.log("No")

				const split_again = split(element);
				console.log('split_again', split_again);
				
				// ~~Check length again.~~
				// Push the last two in.
				split_again.forEach(element => {
					// if(checkLength_individual(element)){
					// 	console.log("Yes")
						temp_arr.push(element)
					// }
				});	
			}
	});
		console.log('Final temp_arr: ', temp_arr);
		
		// Now to look at each pair and put them in order.




		sorted_output=temp_arr;
		// console.log('sorted_output: ', sorted_output);
		return sorted_output;
	}
	// // console.log('sorted_output: ', sorted_output);
	// return sorted_output;
	// return split_result[2];
}
// console.log(mergeSort(str));
// console.log(mergeSort(nonsense));
// console.log(mergeSort(single));
console.log(mergeSort(in_order));
// console.log(mergeSort(out_of_order));
// console.log(mergeSort(triplet_in_order));
// console.log(mergeSort(triplet_out_of_order));
