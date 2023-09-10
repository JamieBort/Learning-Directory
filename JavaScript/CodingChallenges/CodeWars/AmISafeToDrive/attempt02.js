// attempt02.js

// alcohol = [[5.2,568],[5.2,568],[5.2,568],[12.0,175],[12.0,175],[12.0,175]];
// drive(alcohol, "23:00", "08:15");
// should return [15.16, false]

// Given/Examples
const alcohol = [
  [5.2, 568],
  [5.2, 568],
  [5.2, 568],
  [12.0, 175],
  [12.0, 175],
  [12.0, 175],
];
const finished = "23:00";
const drive_time = "08:15";

function drive(drinks, finished, drive_time) {
  // Declare variables
  let tally = 0;
  let finishedConverted = [];
  let drive_timeConverted = [];
  //   console.log("finishedConverted:", finishedConverted);
  //   console.log("drive_timeConverted:", drive_timeConverted);

  //   Declare functions

  //  Function to calculate units of alcohol.
  //  Strength (ABV) x volume (ml) / 1000 = units.
  drinks.forEach((element) => {
    tally += (element[0] * element[1]) / 1000;
  });

  // Function to convert time in string format into an integer of minutes.
  const convertTime = function (param01) {
    // console.log("param01:", param01);
    const param01Array = param01.split(":");
    for (let index = 0; index < param01Array.length; index++) {
      param01Array[index] = parseInt(param01Array[index]);
    }
    // console.log("param01Array:", param01Array);
    const minutes = param01Array[0] * 60 + param01Array[1];
    // console.log("minutes:", minutes);
    return param01Array[0] * 60 + param01Array[1];
    return minutes;
  };

  //   Function to calculate the elapsed time.
  const elapsedTime = function (param01, param02) {
    console.log("Function to calculate the elapsed time.");
    console.log("Time finished drinking:", param01);
    console.log("Time to dive:", param02);
    const elapsedTime = param02 - param01;
    console.log("Elapsed time in minutes:", elapsedTime);
    const elapsedHours = (elapsedTime - (elapsedTime % 60)) / 60;
    const elapsedMinutes = elapsedTime % 60;
    console.log("elapsedHours:", elapsedHours);
    console.log("elapsedMinutes:", elapsedMinutes);
    // console.log((elapsedTime - (elapsedTime % 60)) % 60);
    // console.log((elapsedTime - (elapsedTime % 60)) / 60);
    return elapsedTime;
  };

  //   Convert time in string format into integer array.
  finishedConverted = convertTime(finished);
  drive_timeConverted = convertTime(drive_time);
  console.log("finishedConverted:", finishedConverted);
  console.log("drive_timeConverted:", drive_timeConverted);

  // Check whether it's the next day or not.
  // If the finished >= drive_time then you can assume that it is the next day.
  if (finishedConverted >= drive_timeConverted) {
    // console.log(
    //   "Since finished >= drive_time, it is the next day. Add 24 hours to drive_time.",
    // );
    console.log(
      "Since finishedConverted >= drive_timeConverted, it is the next day. Add 24 hours to drive_time.",
    );
    // console.log("drive_timeConverted before:", drive_timeConverted);
    // drive_timeConverted[0] = drive_timeConverted[0] + 24;
    drive_timeConverted += 24 * 60;
    // console.log("drive_timeConverted after:", drive_timeConverted);
  } else {
    console.log("Since finished < drive_time, it is the same day. DO NOTHING.");
  }
  console.log("drive_timeConverted after:", drive_timeConverted);

  //   Calculate the elapsed time.
  const eT = elapsedTime(finishedConverted, drive_timeConverted);
  console.log("eT:", eT);

  //   Determine whether enough time has elapsed.
  const checkBoolean = function (params01, params02) {
    console.log("The quantity of alcohol:", params01);
    console.log("The quantity of elapsed time:", params02);
    console.log("params02/60:", params02 / 60);
    if (params01 > params02 / 60) {
      console.log("Not enough time.");
      return false;
    } else {
      console.log("enough time");
      return true;
    }
  };
  //   checkBoolean(tally, eT);
  //   return [tally.toFixed(2)];
  return [parseFloat(tally.toFixed(2)), checkBoolean(tally, eT)];
}

console.log(drive(alcohol, finished, drive_time));
