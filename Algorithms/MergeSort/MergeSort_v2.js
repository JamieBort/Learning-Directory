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
const quadruplet_in_order = [ 2, 5, 6, 7 ];
const quadruplet_out_of_order = [ 7, 6, 5, 2 ];
const five_in_order = [ 0, 2, 5, 6, 7 ];
const five_out_of_order = [ 7, 6, 5, 2, 0 ];

// Returns true if in order. False if out of order.
checkOrder = (arr) => {
	console.log('checking order: ', arr);
	if (arr[0] < arr[1]) return true;
	else return false;
};

sort_two = (arr) => ([ arr[0], arr[1] ] = [ arr[1], arr[0] ]);

// Split array into two.
split = (arr) => {
	const half_length = Math.ceil(arr.length / 2);
	// const half_length = Math.floor(arr.length / 2);
	const indexToSplit = arr.indexOf(arr[half_length]);
	return [ arr.slice(0, indexToSplit), arr.slice(indexToSplit) ];
};

sort_four = (arr) => {
	const temp_arr = [];
	// console.log('Given: [ [ 6, 7 ], [ 2, 5 ] ]');
	// console.log('Wanted: [ 4, 5, 6, 7 ]');
	console.log('Original arr in sort_four: \n', arr);
	// console.log('arr[0]: ', arr[0]);
	// console.log('arr[1]: ', arr[1]);
	// console.log('arr[0][0]: ', arr[0][0]);
	// console.log('arr[0][1]: ', arr[0][1]);
	// console.log('arr[1][0]: ', arr[1][0]);
	// console.log('arr[1][1]: ', arr[1][1]);

	if (arr[0][0] < arr[1][0]) {
		arr.forEach((element) => {
			element.forEach((e) => {
				console.log('element: ', e);
				temp_arr.push(e);
			});
		});
	} else {
		if (arr[0][0] > arr[1][0]) temp_arr.push(arr[1][0]);
		if (arr[0][0] > arr[1][1]) temp_arr.push(arr[1][1]);
		temp_arr.push(arr[0][0]);
		temp_arr.push(arr[0][1]);
	}
	console.log('temp_arr in sort_four: \n', temp_arr);
	return temp_arr;
};

function mergeSort(arr) {
	console.log('Original array: ', arr);
	// Need to check to make sure it's an integer array.
	// Or make sure all function calls pass in integer arrays.
	if (arr.length < 1) console.log('The length is less than 1.');
	else if (arr.length === 1) return arr;
	else if (arr.length === 2) {
		if (checkOrder(arr)) return arr;
		else return sort_two(arr);
	} else if (arr.length > 2) {
		// Check order.
		// If in order, return it.
		// else:

		// Need to spit it in two.
		const split_result = split(arr);
		console.log('split_result first time:\n', split_result);
		split_result.forEach((element) => {
			// console.log('element: ', element);
			if (!checkOrder(element)) return sort_two(element);
			// console.log('!checkOrder(element): ', !checkOrder(element));
			// sort_two(element);
			// console.log('element: ', element);
		});
		// console.log('split_result again: ', split_result);
		return sort_four(split_result);
	}
}
// console.log(mergeSort(str));
// console.log(mergeSort(nonsense));
// console.log(mergeSort(single));
// console.log(mergeSort(in_order));
// console.log(mergeSort(out_of_order), '\nWanted: ', in_order);
// console.log(mergeSort(triplet_in_order));
// console.log(mergeSort(triplet_out_of_order), '\nWanted: ', triplet_in_order);
// console.log(mergeSort(quadruplet_in_order));
// console.log(mergeSort(quadruplet_out_of_order), '\nWanted: ', quadruplet_in_order);
// console.log(mergeSort(five_in_order));
console.log(mergeSort(five_out_of_order), '\nWanted: ', five_in_order);
