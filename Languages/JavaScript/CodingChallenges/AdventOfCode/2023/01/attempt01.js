// attempt01.js
const partial = `sdpgz3five4seven6fiveh
876mbxbrntsfm
fivek5mfzrdxfbn66nine8eight
554qdg
ninevsgxnine6threesix8
4fivehmg614five`;

const abc = [];

// Approach:
// Look at each line.
// Find the first number.
// Find the last number.
// Concatenate the two numbers.
// Convert the number from a string to an integer.
// Add them to an array.
// Sum the elements of the array.

// ------------------------------------
// Finding the end of the line:

function findLineBreak(params) {
  const array = [];
  for (let index = 0; index < params.length; index++) if (partial[index] === String.fromCharCode(10)) array.push(index);
  //   console.log("The line breaks are: ", array);
  return array;
}
// findLineBreak(partial);

// ------------------------------------
// Generate array of rows:

function isolateLine(param) {
  const rowArray = [];
  const lineBreakArray = findLineBreak(param);
  const lengthLineBreakArray = lineBreakArray.length;
  //   console.log("The line break array length: ", lengthLineBreakArray);
  const lengthOfParam = param.length;
  //   console.log("The line breaks array is: ", lineBreakArray);
  rowArray.push(param.slice(0, lineBreakArray[0]));
  for (let index = 0; index < lineBreakArray.length - 1; index++) {
    rowArray.push(param.slice(lineBreakArray[index] + 1, lineBreakArray[index + 1]));
  }
  rowArray.push(param.slice(lineBreakArray[lengthLineBreakArray - 1] + 1, lengthOfParam));
  //   console.log(rowArray);
  return rowArray;
}
const arrayOfRows = isolateLine(partial);
// console.log(isolateLine(partial));

// ------------------------------------
// Taking the array of rows and calling isolateInteger on each of them.
// console.log(arrayOfRows);

for (let index = 0; index < arrayOfRows.length; index++) abc.push(isolateInteger(arrayOfRows[index]));
// isolateInteger(arrayOfRows[0]);
// isolateInteger(arrayOfRows[1]);

// ------------------------------------
// Finding the first and last numbers in the line, concatenate them, and then converting them to an integer:

// const str01 = `sdpgz3five4seven6fiveh`;
// const str02 = `876mbxbrntsfm`;
// const testStr = `876mbxbrntsfm543`;

function isolateInteger(param) {
  let item;
  //   const output =[];

  // Using match with regEx to obtain the numbers.
  // Using the match() method to put those in an array
  const matches = param.match(/\d+/g);
  // console.log("matches: ", matches);

  // Concatenating all elements in the match array.
  if (matches.length === 1) item = matches[0];
  else item = matches[0] + matches[matches.length - 1];
  //   console.log("item: ", item);

  // If the concatenated number (item) is greater than 2 digits long, take only the first and last digit.
  if (item.length > 2) {
    item = item[0] + item[item.length - 1];
    // console.log("item: ", item);
  }
  //   else console.log("item: ", item);

  // Convert item from a string type to an integer type.
  item = parseInt(item);
  // console.log("item: ", item);

  return item;
}

console.log("abc: ", abc);

// // ------------------------------------
// // Summing the values of the array

const callBack = (accumulator, current) => {
  //   console.log("accumulator: ", accumulator);
  //   console.log("current: ", current);
  return accumulator + current;
};

let sum = abc.reduce(callBack);

console.log("Total sum: ", sum);
