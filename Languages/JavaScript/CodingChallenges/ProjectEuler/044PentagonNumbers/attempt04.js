// attempt03.js

// Generate the first n pentagonal numbers
const pentagonalArray = [];
const GeneratePentagonalNumbersArray = function (param) {
  for (let index = 1; index < param + 1; index++) {
    pentagonalArray.push((index * (3 * index - 1)) / 2);
  }
  //   console.log(pentagonalArray);
};
GeneratePentagonalNumbersArray(2500);

// console.log(pentagonalArray[3]);

// Check to see if Pj+Pk is in the pentagonalArray array.
// // // console.log(array1.includes(2));

for (let index = 0; index < pentagonalArray.length; index++) {
  //   console.log(pentagonalArray[index]);
  for (let índice = 0; índice < index; índice++) {
    if (
      pentagonalArray.includes(pentagonalArray[índice] + pentagonalArray[index])
    ) {
      //   console.log(
      //     pentagonalArray[índice],
      //     "+",
      //     pentagonalArray[index],
      //     "=",
      //     pentagonalArray[índice] + pentagonalArray[index],
      //     "is in the array.",
      //   );
      if (
        pentagonalArray.includes(
          pentagonalArray[index] - pentagonalArray[índice],
        )
      ) {
        console.log("********** WINNER! **********");
        console.log("********** WINNER! **********");
        console.log("********** WINNER! **********");
        console.log("********** WINNER! **********");
        console.log("********** WINNER! **********");
        console.log("********** WINNER! **********");
        console.log(
          "And",
          pentagonalArray[index],
          "-",
          pentagonalArray[índice],
          "=",
          pentagonalArray[index] - pentagonalArray[índice],
          "is also in the array",
        );
        console.log(
          "Furthermore, the index is",
          index,
          "and the índice is",
          índice,
          ".",
        );
        // break;
      } else {
        // console.log(
        //   "But",
        //   pentagonalArray[index],
        //   "-",
        //   pentagonalArray[índice],
        //   "=",
        //   pentagonalArray[index] - pentagonalArray[índice],
        //   "is not in the array.",
        // );
      }
    }
  }
}

// And 7042750 - 1560090 = 5482660 is also in the array.
