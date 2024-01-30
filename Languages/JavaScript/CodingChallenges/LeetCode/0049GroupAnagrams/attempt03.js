// attempt03.js

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
anAnswer = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// const strs = [""]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// const strs = ["a"]

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
    console.log("strs:", strs);
    console.log("finalArray:", finalArray);
    console.log("*********");
  };

  // let tempArray = [];

  tempArray.push(strs.shift());
  // tempArray.push(strs[0]);
  // console.log("tempArray:", tempArray);

  while (strs.length > 0) {
    // console.log("strs.length:", strs.length);

    // Compare two strings to see if they're anagrams.
    for (let index = 0; index < strs.length; index++) {
      // If yes, push them into an array.
      if (anagramTest(tempArray[0], strs[index])) {
        // console.log("tempArray[0]:", tempArray[0]);
        // console.log("strs[index]:", strs[index]);
        // // tempArray.push(strs.shift());
        tempArray.push(strs.splice(index, 1)[0]);
        // // tempArray.push(strs[index]);
        // // index--;
      } else console.log(strs[index], "is not an anagram with", tempArray[0]);
      // consoleLogCheck()
    }

    // const finalArray = [tempArray];
    finalArray.push(tempArray);
    tempArray = [];
    tempArray.push(strs.shift());
    // consoleLogCheck();

    // for (let index = 0; index < strs.length; index++) {
    //   if (anagramTest(tempArray[0], strs[index])) {
    //     // console.log("tempArray[0]:", tempArray[0]);
    //     // console.log("!!strs[index]:", strs[index]);
    //     tempArray.push(strs.splice(index, 1)[0]);
    //   } else console.log(strs[index], "is not an anagram with", tempArray[0]);
    // }

    // finalArray.push(tempArray);
    // consoleLogCheck();
    // finalArray.push(strs);
  }
  consoleLogCheck();
  finalArray.push(tempArray);

  return finalArray;
};

console.log(groupAnagrams(strs));
// groupAnagrams(strs);
console.log("anAnswer:", anAnswer);
