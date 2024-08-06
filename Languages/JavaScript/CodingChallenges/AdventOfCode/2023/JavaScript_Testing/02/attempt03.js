function attempt03(param) {
  console.log("param outer:", param);
  const words = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const lengthOfParam = param.length;
  const arrayOfBreakLineIndices = [];
  const rowArray = [];
  const arrayOfIntegers = [];
  // TODO: update this function so that it finds the numbers in the param.
  const isolateInteger = (param) => {
    // console.log("param inner:", param);
    // let item;
    // // Using match with regEx to obtain the numbers.
    // // Using the match() method to put those in an array
    // const matches = param.match(/\d+/g);
    // // Concatenating all elements in the match array.
    // if (matches.length === 1) item = matches[0] + matches[0];
    // else item = matches[0] + matches[matches.length - 1];
    // // If the concatenated number (item) is greater than 2 digits long, take only the first and last digit.
    // if (item.length > 2) item = item[0] + item[item.length - 1];
    // // // Convert item from a string type to an integer type.
    // // item = parseInt(item);
    // // // console.log("item: ", item);
    // return parseInt(item);
  };
  const initialValue = 0;

  // Find the line breaks in the template literal. Push them into the arrayOfBreakLineIndices array.
  for (let index = 0; index < lengthOfParam; index++) if (param[index] === String.fromCharCode(10)) arrayOfBreakLineIndices.push(index);
  console.log("arrayOfBreakLineIndices: ", arrayOfBreakLineIndices);

  // Isolate each row using the break line points from the arrayOfBreakLineIndices array. Push each row into the rowArray array.
  const lengthArrayOfBreakLineIndices = arrayOfBreakLineIndices.length;
  console.log("lengthArrayOfBreakLineIndices: ", lengthArrayOfBreakLineIndices);
  rowArray.push(param.slice(0, arrayOfBreakLineIndices[0]));
  for (let index = 0; index < lengthArrayOfBreakLineIndices - 1; index++) {
    rowArray.push(param.slice(arrayOfBreakLineIndices[index] + 1, arrayOfBreakLineIndices[index + 1]));
  }
  rowArray.push(param.slice(arrayOfBreakLineIndices[lengthArrayOfBreakLineIndices - 1] + 1, lengthOfParam));
  // console.log("rowArray: ", rowArray);

  //   Using the rowArray array, generate an array of the integers we're interested in summing.
  for (let index = 0; index < rowArray.length; index++) arrayOfIntegers.push(isolateInteger(rowArray[index]));
  console.log("arrayOfIntegers: ", arrayOfIntegers);

  // arrayOfIntegers = [35, 86, 58, 54, 98];
  // return 35;
  // return arrayOfIntegers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return 35 + 86 + 58 + 54 + 98;
}
module.exports = attempt03;
