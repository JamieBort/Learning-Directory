// attempt03.js

// Test cases/examples
// console.log(alphabetWar("z")); //=>  "z"  => "Right side wins!" DONE
// console.log(alphabetWar("tz")); //=>  "ts" => "Left side wins!" DONE
// console.log(alphabetWar("jz")); //=>  "jz" => "Right side wins!" DONE
// console.log(alphabetWar("zt")); //=>  "st" => "Left side wins!"
console.log(alphabetWar("azt")); //=> "ast" => "Left side wins!"
// console.log(alphabetWar("tzj")); //=> "tzj" => "Right side wins!" DONE

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
  const powerArray = ["116106", "115122", "098100", "112113", "119109"];
  //   const powerArray = [116106, 115122, 098100, 112113, 119109];
  //   const powerArray = [116106, 115122, 98100, 112113, 119109];
  let leftTotal = 0;
  let rightTotal = 0;

  // TODO: Generate the powerArray from the leftPower and rightPower variables:

  // TODO: Check the powerArray for points and characters using String.charCodeAt() and String.fromCharCode().
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  // and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
  //   powerArray.forEach((element) => {
  //     console.log(String.fromCharCode(element.substring(0, 3)));
  //     console.log(String.fromCharCode(element.substring(3)));
  //   });
  //   for (let index = 0; index < powerArray.length; index++) {
  //     console.log(index);
  //     console.log(String.fromCharCode(powerArray[index].substring(0, 3)));
  //     console.log(String.fromCharCode(powerArray[index].substring(3)));
  //   }

  // Define functions.

  const tallyPoints = function (param1, param2) {
    // console.log(`param1 in tallyPoints: ${param1}`);
    // console.log(`param2 in tallyPoints: ${param2}`);
    let numLeft = 0;
    let numRight = 0;
    // look at the first character
    // if it exists in the object, add the points.
    // console.log(param1[0] in leftPower);
    // console.log(param1[0] in rightPower);

    // console.log(typeof rightPower[0]);
    // console.log(typeof z);

    // console.log(typeof Object.keys(rightPower)[0]);
    for (let i in param1) {
      //   console.log(param1[i]);
      //   console.log(typeof param1[i]);
      //   //   if (param1[i] in leftPower) console.log(leftPower.param1[i]);
      if (param1[i] in rightPower) {
        // console.log(rightPower[param1[i]]);
        // console.log(param1[i] in rightPower);
        numRight += rightPower[param1[i]];
      } else {
        numLeft += leftPower[param1[i]];
      }
    }
    return [numLeft, numRight];
  };
  //   console.log(`tallyPoints(fight):${tallyPoints(fight)}`);

  const getKeyByValue = function (object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  };

  const switchCharacters = function (param1) {
    console.log("switch characters");
    switch (param1) {
      // from left to right
      case "w":
        return getKeyByValue(rightPower, leftPower.w);
      case "p":
        return getKeyByValue(rightPower, leftPower.p);
      case "b":
        return getKeyByValue(rightPower, leftPower.b);
      case "s":
        return getKeyByValue(rightPower, leftPower.s);
      case "t":
        return "t";
      // from right to left
      case "m":
        return getKeyByValue(leftPower, rightPower.m);
      case "q":
        return getKeyByValue(leftPower, rightPower.q);
      case "d":
        return getKeyByValue(leftPower, rightPower.d);
      case "z":
        return getKeyByValue(leftPower, rightPower.z);
      case "j":
        return "j";
      default:
        console.log(`Fix me. "${param1}" is not set up.`);
    }
  };

  console.log('fight.includes("t")', fight.includes("t"));
  console.log('fight.includes("j")', fight.includes("j"));

  // If t nor j is present, tally points.
  // If t and j is present, tally points.
  if (
    (fight.includes("t") && fight.includes("j")) ||
    (!fight.includes("t") && !fight.includes("j"))
  ) {
    console.log(
      "Either t nor j is present. Or t and j is present. Tally points.",
    );
    for (let i in fight) {
      //   console.log(fight[i]);
      if (fight[i] in rightPower) {
        // console.log("Right side");
        rightTotal = tallyPoints(fight, rightPower)[1];
      } else if (fight[i] in leftPower) {
        // console.log("Left side");
        leftTotal = tallyPoints(fight, leftPower)[0];
      }
    }
  }

  // If t or j is present, switch characters, then tally points.
  else {
    console.log("t or j is present. Switch characters. Then tally points.");

    console.log(`The old string is "${fight}".`);
    newString = fight.replace(
      fight.charAt(fight.indexOf("t") + 1),
      switchCharacters(fight.charAt(fight.indexOf("t") + 1)),
    );
    console.log(`The new string is "${newString}".`);

    for (let i in newString) {
      //   console.log(fight[i]);
      if (newString[i] in rightPower) {
        // console.log("Right side");
        rightTotal = tallyPoints(newString, rightPower)[1];
      } else if (newString[i] in leftPower) {
        // console.log("Left side");
        leftTotal = tallyPoints(newString, leftPower)[0];
      }
    }
  }

  if (leftTotal > rightTotal) return LEFT;
  else if (rightTotal > leftTotal) return RIGHT;
  else return TIE;
}
