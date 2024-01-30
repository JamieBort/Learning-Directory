// attempt02.js

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
  console.log("ORIGINAL:", strs);

  console.log("Take a look at the first two elements of strs.");
  console.log("strs[0]:", strs[0], "AND strs[1]:", strs[1]);
  //   console.log("strs[1]:", strs[1]);

  console.log("Create an array.");
  console.log("Add the first element to that array.");

  let array = [];
  //   console.log("array:", array);
  //   console.log("strs:", strs);

  var first = strs[0].split("");
  var second = strs[1].split("");
  console.log("first:", first);
  console.log("second:", second);

  array = [strs.shift()];

  //     first.forEach((element) => {
  // 		if(second.includes(element))
  //   //     console.log("second.includes(element)", second.includes(element));
  //   //     if (!second.includes(element)) console.log("MOVE ON TO THE NEXT ONE.");
  //   //     else array.push(strs.shift());
  //     });

  if (
    second.includes(first[0]) &&
    second.includes(first[1]) &&
    second.includes(first[2])
  )
    array.push(strs.shift());

  console.log("******* CHECK01 *******");
  console.log("array:", array);
  console.log("strs:", strs);

  //   console.log("Check the next element in the array.");

  //   var third = strs[0].split("");
  //   console.log("third:", third);

  //   if (
  //     third.includes(first[0]) &&
  //     third.includes(first[1]) &&
  //     third.includes(first[2])
  //   )
  //     array.push(strs.shift());
  //   else
  //     console.log(
  //       "It didn't work. Check the second element of the incoming array:",
  //       strs[1],
  //     );

  //   var forth = strs[1].split("");
  //   console.log("forth:", forth);

  //   if (
  //     forth.includes(first[0]) &&
  //     forth.includes(first[1]) &&
  //     forth.includes(first[2])
  //   )
  //     array.push(strs.splice(1, 1)[0]);

  //   // strs.splice(1, 1);

  //   console.log("******* CHECK *******");
  //   console.log("array:", array);
  //   console.log("strs:", strs);

  //   //   console.log(third.includes(first[0]));
  //   //   console.log(third.includes(first[1]));
  //   //   console.log(third.includes(first[2]));

  //   //   console.log("If true, continue.");
  //   //   console.log("If false, move on.");

  //   //   return array;
};

console.log(groupAnagrams(strs));
// groupAnagrams(strs);
// console.log("anAnswer:", anAnswer);
