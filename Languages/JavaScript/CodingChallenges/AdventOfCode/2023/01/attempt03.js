// attempt03.js

// Approach:
// Look at each line.
// Find the first number.
// Find the last number.
// Concatenate the two numbers.
// Convert the number from a string to an integer.
// Add them to an array.
// Sum the elements of the array.

const partial = `sdpgz3five4seven6fiveh
876mbxbrntsfm
fivek5mfzrdxfbn66nine8eight
554qdg
ninevsgxnine6threesix8`;

// Want [35, 86, 58, 54, 98]

function sumString(param) {
  const lengthOfParam = param.length;
  const arrayOfBreakLineIndices = [];
  const rowArray = [];
  const arrayOfIntegers = [];
  const isolateInteger = (param) => {
    let item;

    // Using match with regEx to obtain the numbers.
    // Using the match() method to put those in an array
    const matches = param.match(/\d+/g);

    // Concatenating all elements in the match array.
    if (matches.length === 1) item = matches[0] + matches[0];
    else item = matches[0] + matches[matches.length - 1];

    // If the concatenated number (item) is greater than 2 digits long, take only the first and last digit.
    if (item.length > 2) item = item[0] + item[item.length - 1];

    // // Convert item from a string type to an integer type.
    // item = parseInt(item);
    // // console.log("item: ", item);

    return parseInt(item);
  };

  // Find the line breaks in the template literal. Push them into the arrayOfBreakLineIndices array.
  for (let index = 0; index < lengthOfParam; index++) if (partial[index] === String.fromCharCode(10)) arrayOfBreakLineIndices.push(index);
  // console.log("arrayOfBreakLineIndices: ", arrayOfBreakLineIndices);

  // Isolate each row using the break line points from the arrayOfBreakLineIndices array. Push each row into the rowArray array.
  const lengthArrayOfBreakLineIndices = arrayOfBreakLineIndices.length;
  rowArray.push(param.slice(0, arrayOfBreakLineIndices[0]));
  for (let index = 0; index < lengthArrayOfBreakLineIndices - 1; index++) {
    rowArray.push(param.slice(arrayOfBreakLineIndices[index] + 1, arrayOfBreakLineIndices[index + 1]));
  }
  rowArray.push(param.slice(arrayOfBreakLineIndices[lengthArrayOfBreakLineIndices - 1] + 1, lengthOfParam));
  // console.log("rowArray: ", rowArray);

  //   Using the rowArray array, generate an array of the integers we're interested in summing.
  for (let index = 0; index < rowArray.length; index++) arrayOfIntegers.push(isolateInteger(rowArray[index]));
  console.log("arrayOfIntegers: ", arrayOfIntegers);

  // Summing the values of the arrayOfIntegers array.
  const callBack = (accumulator, current) => accumulator + current;
  return arrayOfIntegers.reduce(callBack);
}
// console.log(sumString(partial));
sumString(partial);

// console.log("partial.length: ", partial.length);

// From https://dev.to/slimpython/convert-number-to-words-in-javascript-with-explanation-30gj
// let number = 1.23;
// console.log((number %= 100));
