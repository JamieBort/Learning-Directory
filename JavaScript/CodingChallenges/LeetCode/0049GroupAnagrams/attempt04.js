// attempt04.js

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// anAnswer = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

// Example 2:
// Input: strs = [""]
// Output: [[""]]
// const strs = [""];
// anAnswer = [[""]];

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]
// const strs = ["a"];
// anAnswer = [["a"]];

// Example 4:
// Input: strs = ["",""]
// Output: [["",""]]
// const strs = ["", ""];
// anAnswer = [["", ""]];

// Example 5:
// Input: strs = ["","",""]
// Output: [["","",""]]
const strs = ["", "", ""];
anAnswer = [["", "", ""]];

var groupAnagrams = function (strs) {
  // Display the original array.
  console.log("The original array, strs:\n", strs);

  // Declare Variables
  let tempArray = [];
  const finalArray = [];

  // Function for comparing two strings to see if they're anagrams.
  // Returns 'true' if they're an anagram; 'false' if  not.
  anagramTest = function (param1, param2) {
    const first = param1.split("").sort().join();
    const second = param2.split("").sort().join();
    if (first === second) return true;
    return false;
  };

  // Function for displaying the contents of the various arrays.
  consoleLogCheck = function () {
    console.log("CHECK:");
    console.log("tempArray:", tempArray);
    console.log("tempArray.length:", tempArray.length);
    console.log("strs:", strs);
    console.log("finalArray:", finalArray);
    console.log("*********");
  };

  tempArray.push(strs.shift());
  consoleLogCheck();

  while (strs.length > 0) {
    console.log("strs.length:", strs.length);
    // Compare two strings to see if they're anagrams.
    for (let index = 0; index < strs.length; index++) {
      // If yes, push them into an array.
      if (anagramTest(tempArray[0], strs[index])) {
        tempArray.push(strs.splice(index, 1)[0]);
      }
      // else console.log(strs[index], "is not an anagram with", tempArray[0]);
      // consoleLogCheck()
    }

    finalArray.push(tempArray);
    tempArray = [];
    tempArray.push(strs.shift());
    // consoleLogCheck();
  }
  // consoleLogCheck();
  finalArray.push(tempArray);
  // if (tempArray.length > 0) finalArray.push(tempArray);

  // if (tempArray[0] != undefined) finalArray.push(tempArray);

  return finalArray;
};

console.log(groupAnagrams(strs));
// groupAnagrams(strs);
console.log("anAnswer:", anAnswer);
