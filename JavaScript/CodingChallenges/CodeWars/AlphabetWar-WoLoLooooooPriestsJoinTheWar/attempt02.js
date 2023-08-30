// attempt02.js

// alphabetWar("z"); //=>  "z"  => "Right side wins!"
alphabetWar("tz"); //=>  "ts" => "Left side wins!"
// alphabetWar("jz")        //=>  "jz" => "Right side wins!"
// alphabetWar("zt")        //=>  "st" => "Left side wins!"
// alphabetWar("azt")       //=> "ast" => "Left side wins!"
// alphabetWar("tzj")       //=> "tzj" => "Right side wins!"

function alphabetWar(fight) {
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
  const leftTotal = 0;
  const rightTotal = 0;

  //   Obtain the length of the string:
  const length = fight.length;

  const getKeyByValue = function (object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  };

  //   const expr = "s";
  const switchFunction = function (param) {
    switch (param) {
      case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
      case "s":
        console.log("bam!");
        getKeyByValue(rightPower, leftPower.s);
        break;
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        console.log(`Fix me. ${param} is not set up.`);
    }
  };

  //   console.log(getKeyByValue(rightPower, leftPower.s));

  // Search for a "j" in the string. If you find it, replace the letter from the 'rightPower' object with a corresponding letter from the "leftPower" object.
  // Search for a "t" in the string. If you find it, replace the letter from the 'leftPower' object with a corresponding letter from the "rightPower" object.

  if (fight.includes("t")) {
    console.log(
      "We need to change the letters from the 'rightPower' object to the 'leftPower' object.",
    );

    // If fight[fight.indexOf("t")] exists, and if the letter(s) on either side of 't' belong to the 'rightPower' object, then we'll swap them for the corresponding letter in the 'leftPower' object.

    console.log("The 't' appears at the ", fight.indexOf("t"), "character.");

    // the letter before:
    console.log("The letter before:", fight.charAt(fight.indexOf("t") - 1));
    // the letter after:
    console.log(
      "The letter before:",
      fight.charAt(fight.indexOf("t") + 1),
      "type of: ",
      typeof fight.charAt(fight.indexOf("t") + 1),
    );

    switchFunction("s");
    switchFunction(fight.charAt(fight.indexOf("t") + 1));
  }

  if (fight.includes("j"))
    console.log(
      "We need to change the letters from the 'leftPower' object to the 'rightPower' object.",
    );

  // Parse the string.

  //   console.log(fight.charAt(0));

  // Total/sum the points

  // Compare the points.
  if (leftTotal > rightTotal) return LEFT;
  else if (rightTotal > leftTotal) return RIGHT;
  else return TIE;

  //   return "Wo lo loooooo";
}
