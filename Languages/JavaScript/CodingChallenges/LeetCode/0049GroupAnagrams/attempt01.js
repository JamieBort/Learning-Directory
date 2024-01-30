// attempt01.js

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
const strs = [ 'eat', 'tea', 'tan', 'ate', 'nat', 'bat' ];
anAnswer = [["bat"],["nat","tan"],["ate","eat","tea"]];

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// const strs = [""]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// const strs = ["a"]

var groupAnagrams = function(strs) {
	console.log("The original list:")
	console.log("strs:",strs);
	// console.log("strs[0]:",strs[0]);
	
	// Generate all anagrams from first word
	const tempBucket=[];

	let tempString = "";
	tempString = strs[0][0];
	tempString += strs[0][1];
	tempString += strs[0][2];
	tempBucket.push(tempString);

	// let tempString = "";
	tempString = "";
	tempString = strs[0][0];
	tempString += strs[0][2];
	tempString += strs[0][1];
	tempBucket.push(tempString);

	tempString = "";
	tempString += strs[0][2];
	tempString += strs[0][1];
	tempString += strs[0][0];
	tempBucket.push(tempString);

	tempString = "";
	tempString += strs[0][2];
	tempString += strs[0][0];
	tempString += strs[0][1];
	tempBucket.push(tempString);

	tempString = "";
	tempString += strs[0][1];
	tempString += strs[0][0];
	tempString += strs[0][2];
	tempBucket.push(tempString);

	tempString = "";
	tempString += strs[0][1];
	tempString += strs[0][2];
	tempString += strs[0][0];
	tempBucket.push(tempString);

	console.log("The complete list:")
	console.log("tempBucket:",tempBucket);

	// Check strs for those letters.
	// Does strs[j] match any of the elements in tempBucket?
	// (the first one always does)
	const array = [];

	// strs.forEach(element => {
	// 	if(tempBucket[0]===strs[0]){
	// 		console.log("tempBucket[0]:",tempBucket[0]);
	// 	} else {
	// 		console.log("tempBucket[0]:",tempBucket[0]);
	// 		console.log("strs[0]:",strs[0]);

	// 	}
	// });

	if(tempBucket[0]===strs[0]){
		console.log("tempBucket[0]:",tempBucket[0]);
		array.push(tempBucket[0]);
	} else {
		console.log("tempBucket[0]:",tempBucket[0]);
		console.log("strs[0]:",strs[0]);

	}

	// const arr = strs[0];
	return array;
};

console.log(groupAnagrams(strs));
// groupAnagrams(strs);
// console.log("anAnswer:", anAnswer);