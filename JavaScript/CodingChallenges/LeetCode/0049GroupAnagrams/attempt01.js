// attempt01.js

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
const strs = [ 'eat', 'tea', 'tan', 'ate', 'nat', 'bat' ];

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// const strs = [""]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// const strs = ["a"]

var groupAnagrams = function(strs) {
	// console.log("strs:",strs);
	// console.log("strs[0]:",strs[0]);
	
	// Generate all anagrams from first word
	const tempBucket=[];
	tempBucket.push(strs[0]);

	let tempString = "";
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
	console.log("tempBucket:",tempBucket);

	// Check strs for those letters.
	// Does strs[j] match any of the elements in tempBucket?
	// (the first one always does)
	const array = [];
	strs.forEach(element => {
		if(tempBucket[0]===element){
			
		}
	});
	// if()

	const arr = strs[0];
	return arr;
};

console.log(groupAnagrams(strs));
