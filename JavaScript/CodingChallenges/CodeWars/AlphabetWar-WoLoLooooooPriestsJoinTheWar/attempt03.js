// attempt03.js

// Test cases/examples
// alphabetWar("z"); //=>  "z"  => "Right side wins!"
// alphabetWar("tz"); //=>  "ts" => "Left side wins!"
alphabetWar("jz"); //=>  "jz" => "Right side wins!"
// alphabetWar("zt")        //=>  "st" => "Left side wins!"
// alphabetWar("azt")       //=> "ast" => "Left side wins!"
// alphabetWar("tzj")       //=> "tzj" => "Right side wins!"

function alphabetWar(fight) {
  // Define the variables.
  const RIGHT = "Right side wins!";
  const LEFT = "Left side wins!";
  const TIE = "Let's fight again!";
  // TODO: Delete this leftPower variable.
  const leftPower = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    t: 0,
  };
  // TODO: Delete this rightPower variable.
  const rightPower = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
    j: 0,
  };
  // The characters in the left and right side powers are represented as 3-digit UTF-16 codes.
  // The powerArray array below consists for five 6-digit integers.
  // The first 3-digits represent the character from the left-side power.
  // The second 3-digits represent the character from the right-side power.
  // The two characters in first element in the powerArray array are worth 0 points.
  // The second two characters in the second element (first position) in the powerArray array are worth 1 point.
  // Etc.
  //   const powerArray = [116106, 115122, 098100, 112113, 119109];
  const powerArray = ["116106", "115122", "098100", "112113", "119109"];
  //   const powerArray = [116106, 115122, 98100, 112113, 119109];
  let leftTotal = 0;
  let rightTotal = 0;

  // TODO: Generate the powerArray from the leftPower and rightPower variables:

  // TODO: Check the powerArray for points and characters using String.charCodeAt() and String.fromCharCode().
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

  powerArray.forEach((element) => {
    //   console.log(parseInt(element.toString().substring(0, 3)));
    //   console.log(parseInt(element.toString().substring(3)));
    console.log(element.substring(0, 3));
    console.log(element.substring(3));
  });

  //   for (let index = 0; index < powerArray.length; index++) {
  //     // console.log(parseInt(powerArray[index].toString().substring(0, 3)));
  //     // console.log(parseInt(powerArray[index].toString().substring(3)));
  //     console.log(powerArray[index].substring(0, 3));
  //     console.log(powerArray[index].substring(3));
  //   }

  if (leftTotal > rightTotal) return LEFT;
  else if (rightTotal > leftTotal) return RIGHT;
  else return TIE;
}
