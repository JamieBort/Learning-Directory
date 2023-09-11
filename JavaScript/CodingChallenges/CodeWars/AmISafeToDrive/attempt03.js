// attempt03.js

// Given/Examples
// // Example 1
// // should return [15.16, false]
// const drinks = [
//   [5.2, 568],
//   [5.2, 568],
//   [5.2, 568],
//   [12.0, 175],
//   [12.0, 175],
//   [12.0, 175],
// ];
// const finished = "23:00";
// const drive_time = "08:15";

// // Example 2
// // Test Passed: Value deep equals [5.05, true]
// const drinks =  [ [ 5.2, 568 ], [ 12, 175 ] ]
// const finished ="16:00"
// const drive_time ="23:00"

// // Example 3
// // Test Passed: Value deep equals [15.16, false]
// const drinks = [
//   [5.2, 568],
//   [5.2, 568],
//   [5.2, 568],
//   [12, 175],
//   [12, 175],
//   [12, 175],
// ];
// const finished = "23:00";
// const drive_time = "08:15";

// // Example 4
// // Test Passed: Value deep equals [8.8, false]
// const drinks = [[15.5, 568]];
// const finished = "23:00";
// const drive_time = "06:45";

// Example 5
// Expected '[1.0, false]' - Expected: [1, false], instead got: [1, true]
const drinks = [[10, 100]];
const finished = "20:00";
const drive_time = "21:00";

// // Example 6
// // Test Passed: Value deep equals [1, true]
// const drinks = [[10, 100]];
// const finished = "20:00";
// const drive_time = "21:01";

function drive(drinks, finished, drive_time) {
  // *** Declare variables ***
  let tally = 0;
  // let finishedConverted = 0;
  // let drive_timeConverted = 0;
  // *** Declare functions ***

  //  Function to calculate units of alcohol.
  //  Strength (ABV) x volume (ml) / 1000 = units.
  drinks.forEach((element) => (tally += (element[0] * element[1]) / 1000));

  // Function to convert time in string format into an integer of minutes.
  const convertTime = function (param01) {
    // console.log("convertTime param01:", param01);
    const param01Array = param01.split(":");
    // console.log("convertTime param01Array:", param01Array);
    for (let index = 0; index < param01Array.length; index++) {
      param01Array[index] = parseInt(param01Array[index]);
    }
    // console.log("convertTime param01Array:", param01Array);
    // console.log(
    //   "convertTime param01Array[0] * 60 + param01Array[1]:",
    //   param01Array[0] * 60 + param01Array[1],
    // );
    return param01Array[0] * 60 + param01Array[1];
  };

  //   Function to calculate the elapsed time.
  const elapsedTime = (param01, param02) => param02 - param01;

  //   Convert time in string format into integer array.
  const finishedConverted = convertTime(finished);
  const drive_timeConverted = convertTime(drive_time);
  // console.log("finishedConverted:", finishedConverted);
  // console.log("drive_timeConverted:", drive_timeConverted);

  // Check whether it's the next day or not.
  // If the finishedConverted >= drive_timeConverted then you can assume that it is the next day.
  if (finishedConverted >= drive_timeConverted) drive_timeConverted += 24 * 60;

  console.log("drive_timeConverted after:", drive_timeConverted);

  // Calculate the elapsed time.
  const eT = elapsedTime(finishedConverted, drive_timeConverted);
  // console.log("eT:", eT);

  // Determine whether enough time has elapsed.
  const checkBoolean = function (params01, params02) {
    // console.log(
    //   "The quantity of alcohol:",
    //   params01,
    //   "The quantity of elapsed time:",
    //   params02,
    //   "params02/60:",
    //   params02 / 60,
    // );

    if (params01 >= params02 / 60) return false;
    else return true;
  };

  //   checkBoolean(tally, eT);
  //   return [tally.toFixed(2)];
  return [parseFloat(tally.toFixed(2)), checkBoolean(tally, eT)];
}

// console.log(drive(alcohol, finished, drive_time));
console.log(drive(drinks, finished, drive_time));
