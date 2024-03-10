const uniqueInOrder = function(string) {
  // Push the first character of 'string' into an array
  // If a character is the same as what has been pushed into the array
  // Push in the next unique character until we're done
  let array = [];
  if (string.length > 0) {
    array.push(string[0]);

    for (let i = 0; i < string.length - 1; i++) {
      if (string[i] === string[i + 1]) {
        // If i + 1 = i, do nothing
      } else {
        // If i + 1 != i, push the i + 1 character into the array
        array.push(string[i + 1]);
      }
    }
  }

  return array;
};

// const uniqueInOrder = function(string) {
//   // Push the first character of 'string' into an array
//   // If a character is the same as what has been pushed into the array
//   // Push in the next unique character until we're done
//   let array = [];
//
//   for (let i = 1; i <= string.length; i++) {
//     if (string[i] != string[i - 1]){
//       // If i + 1 != i, push the i + 1 character into the array
//       array.push(string[i - 1]);
//     }
//   }
//   return array;
// };

const string = "AAAABBBCCDAABBB";

console.log(uniqueInOrder(string));

// should return ['A','B','C','D','A','B']
