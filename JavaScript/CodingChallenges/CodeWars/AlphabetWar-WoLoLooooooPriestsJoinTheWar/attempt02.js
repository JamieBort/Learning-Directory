// attempt02.js

// Test cases/examples
// alphabetWar("z"); //=>  "z"  => "Right side wins!"
// alphabetWar("tz"); //=>  "ts" => "Left side wins!"
alphabetWar("jz"); //=>  "jz" => "Right side wins!"
// alphabetWar("zt")        //=>  "st" => "Left side wins!"
// alphabetWar("azt")       //=> "ast" => "Left side wins!"
// alphabetWar("tzj")       //=> "tzj" => "Right side wins!"

function alphabetWar(fight) {
  // Define the variables.
  const leftPower = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    t: 0,
  };
  const rightPower = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
    j: 0,
  };
  const RIGHT = "Right side wins!";
  const LEFT = "Left side wins!";
  const TIE = "Let's fight again!";
  let leftTotal = 0;
  let rightTotal = 0;
  let newString = "";

  //   // Obtain the length of the string: // TODO: delete this line.
  //   const length = fight.length; // TODO: delete this line.
  //   //   console.log(`The string '${fight}' is ${length} characters long.`); // TODO: delete this line.

  // Define the functions.
  const getKeyByValue = function (object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  };

  const switchFunction = function (param) {
    switch (param) {
      // from left to right
      case "w":
        return getKeyByValue(rightPower, leftPower.w);
      // break;
      case "p":
        return getKeyByValue(rightPower, leftPower.p);
      // break;
      case "b":
        return getKeyByValue(rightPower, leftPower.b);
      // break;
      case "s":
        // console.log("bam!");
        return getKeyByValue(rightPower, leftPower.s);
      // break;
      // from right to left
      case "m":
        return getKeyByValue(leftPower, rightPower.m);
      // break;
      case "q":
        return getKeyByValue(leftPower, rightPower.q);
      // break;
      case "d":
        return getKeyByValue(leftPower, rightPower.d);
      // break;
      case "z":
        // return "s";
        // testCase();
        // console.log("replacing a z");
        // // console.log("rightPower.z:", rightPower.z);
        // // console.log(
        // //   "getKeyByValue(leftPower, 1):",
        // //   getKeyByValue(leftPower, 1),
        // // );
        // getKeyByValue(leftPower, 1);
        return getKeyByValue(leftPower, rightPower.z);

      default:
        console.log(`Fix me. ${param} is not set up.`);
    }
  };

  // Total/sum the points
  //                  function (the string, the left/rightPower object) {
  const tallyPoints = function (param1, param2) {
    console.log(`The string to be tallied: ${param1}`); // TODO: delete this line.
    console.log(`The left/rightPower object: ${JSON.stringify(param2)}`); // TODO: delete this line.
    let tally = 0;
    for (let i in param1) {
      // console.log(param[i]);
      // console.log(leftPower[param[i]]);
      tally += param2[param1[i]];
    }
    return tally;
    // console.log(param2);
    // let tally = 0;
    // if (param3 === undefined) {
    //   for (let i in param1) {
    //     // console.log(param[i]);
    //     // console.log(leftPower[param[i]]);
    //     tally += param2[param1[i]];
    //   }
    //   return tally;
    // }
    // if (param2 === undefined) {
    //   for (let i in param1) {
    //     // console.log(param[i]);
    //     // console.log(leftPower[param[i]]);
    //     tally += param3[param1[i]];
    //   }
    //   return tally;
    // }
  };

  // Search for a "t" in the string.
  // If you find it,
  // replace the letter from the 'leftPower' object with a corresponding letter from the "rightPower" object.
  if (fight.includes("t")) {
    // If fight[fight.indexOf("t")] exists,
    // and if the letter(s) on either side of 't' belong to the 'rightPower' object,
    // then we'll swap them for the corresponding letter in the 'leftPower' object.

    // console.log("A 't' appears at the ", fight.indexOf("t"), "character.");
    // console.log(
    //   "We need to change the letters from the 'rightPower' object to the 'leftPower' object.",
    // );

    // // the letter before:
    // console.log(
    //   "The letter before 't' is:",
    //   fight.charAt(fight.indexOf("t") - 1),
    // );

    // // the letter after:
    // console.log(
    //   "The letter after 't' is:",
    //   fight.charAt(fight.indexOf("t") + 1),
    // );

    console.log(`The old string is "${fight}".`);
    newString = fight.replace(
      fight.charAt(fight.indexOf("t") + 1),
      switchFunction(fight.charAt(fight.indexOf("t") + 1)),
    );
    // leftTotal = tallyPoints(newString, leftPower, undefined);
    leftTotal = tallyPoints(newString, leftPower);
  }

  // Search for a "j" in the string.
  // If you find it,
  // replace the letter from the 'rightPower' object with a corresponding letter from the "leftPower" object.
  if (fight.includes("j")) {
    console.log(
      "We need to change the letters from the 'leftPower' object to the 'rightPower' object.",
    );
    console.log(`The old string is "${fight}".`);
    newString = fight.replace(
      fight.charAt(fight.indexOf("j") + 1),
      switchFunction(fight.charAt(fight.indexOf("j") + 1)),
    );
    console.log("newString:", newString);
    // rightTotal = tallyPoints(newString, undefined, rightPower);
    rightTotal = tallyPoints(newString, rightPower);
  }

  if (!fight.includes("t") && !fight.includes("j")) {
    console.log("The string does not contain a 'j' nor a 't'.");
    newString = fight;
    // console.log(rightPower);
    rightTotal = tallyPoints(newString, rightPower);
    leftTotal = tallyPoints(newString, leftPower);
  }

  if (fight.includes("t") && fight.includes("j")) {
    console.log("The string contains a 'j' and a 't'.");
    // tallyPoints(newString);
  }

  console.log(
    `The leftTotal is ${leftTotal}. The rightTotal is ${rightTotal}.`,
  );
  //   if()
  if (leftTotal > rightTotal) return LEFT;
  else if (rightTotal > leftTotal) return RIGHT;
  else return TIE;
}
