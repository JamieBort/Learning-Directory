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
  console.log("strs:", strs);
  // Function for comparing two strings to see if they're anagrams.
  anagramTest = function (param1, param2) {
    const first = param1.split("").sort().join();
    const second = param2.split("").sort().join();
    if (first === second) return true;
    return false;
  };

  let array = [];
  array.push(strs.shift());
  // array.push(strs[0]);
  console.log("array:", array);

  // Compare two strings to see if they're anagrams.
  // console.log(anagramTest(strs[0], strs[1]));

  // If yes, push them into an array.

  for (let index = 0; index < strs.length; index++) {
    // for (let index = 0; index < 3; index++) {
    // const element = strs[index];

    if (anagramTest(array[0], strs[index])) {
      console.log("array[0]:", array[0]);
      console.log("strs[index]:", strs[index]);
      // // array.push(strs.shift());
      array.push(strs.splice(index, 1)[0]);
      // // array.push(strs[index]);
      // // index--;
    } else console.log(strs[index], "is not an anagram with ", array[0]);

    console.log("array:", array);
    console.log("strs:", strs);
  }

  const finalArray = [array];
  array = [];
  array.push(strs.shift());
  console.log("array again:", array);
  console.log("strs:", strs);
  console.log("finalArray:", finalArray);

  for (let index = 0; index < strs.length; index++) {
    if (anagramTest(array[0], strs[index])) {
      console.log("array[0]:", array[0]);
      console.log("!!strs[index]:", strs[index]);
      array.push(strs.splice(index, 1)[0]);
    } else console.log(strs[index], "is not an anagram with ", array[0]);
  }

  finalArray.push(array);
  console.log("array:", array);
  console.log("strs:", strs);
  console.log("finalArray:", finalArray);

  finalArray.push(strs);

  // array.forEach(element => {
  //   if (anagramTest(strs[0], strs[element])) {}
  //   else console.log(strs[index], "is not an anagram with ", strs[0]);
  // });

  // if (anagramTest(strs[0], strs[1])) array.push(strs[1]);
  // else console.log(strs[1], "is not an anagram with ", strs[0]);

  // console.log("array:", array);

  // if (anagramTest(strs[0], strs[2])) array.push(strs[2]);
  // else console.log(strs[2], "is not an anagram with", strs[0]);

  // console.log("array:", array);

  // if (anagramTest(strs[0], strs[3])) array.push(strs[3]);
  // else console.log(strs[3], "is not an anagram with", strs[0]);

  // console.log("array:", array);

  // if (anagramTest(strs[0], strs[4])) array.push(strs[4]);
  // else console.log(strs[4], "is not an anagram with", strs[0]);

  // console.log("array:", array);

  // if (anagramTest(strs[0], strs[5])) array.push(strs[5]);
  // else console.log(strs[5], "is not an anagram with", strs[0]);

  // console.log("array:", array);

  // if (anagramTest(strs[0], strs[6])) array.push(strs[6]);
  // else console.log(strs[6], "is not an anagram with", strs[0]);

  // console.log("array:", array);

  // If no, check the next element.
  // Continue until done.

  return finalArray;
};

console.log(groupAnagrams(strs));
// groupAnagrams(strs);
// console.log("anAnswer:", anAnswer);
