// attempt03.js

// given:
dict = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: {
        "": "1",
      },
    },
  },
};

// wanted:
// output: {
//   "Key1" : "1",
//   "Key2.a" : "2",
//   "Key2.b" : "3",
//   "Key2.c.d" : "3",
//   "Key2.c.e" : "1"
// }

const tempObject = {};

// Check whether the key in the object is a string or not.
const check = (param01, param02) => {
  if (typeof param01 === "string") {
    console.log(`${param02} is a string. Add it to the new object.`);
    // console.log(`Add the value of ${param02} it to the new object.`);
    // console.log("param02:", param02);
    // console.log("param01:", param01);
    // tempObject[param02] = param01; // this adds it to the new object.
  } else {
    // console.log(`Check the next key, ${param02}.`);
    console.log(
      `${param02} is NOT a string. Iterate through it to see if those keys are strings.`,
    );
    // console.log("param02['a']:", dict[param02]["a"]);
    // console.log("param02['b']:", dict[param02]["b"]);
    // console.log("param02['c']:", dict[param02]["c"]);
    iterateThroughObject(dict[param02]);
  }
};

// iterate through the object
const iterateThroughObject = (param01) => {
  for (const key in param01) {
    // check(param01[key], key);
    if (typeof param01[key] === "string") {
      console.log(`${key} is a string. Add it to the new object.`);
      tempObject[key] = param01[key]; // this adds it to the new object.
    } else {
      console.log(
        `${key} is NOT a string. Iterate through it to see if those keys are strings.`,
      );
      // // console.log("param01[key]['a']:", param01[key]["a"]);
      // // console.log("param01[key]['b']:", param01[key]["b"]);
      // // console.log("param01[key]['c']:", param01[key]["c"]);
      iterateThroughObject(param01[key]);
    }
  }
};

iterateThroughObject(dict);

console.log("tempObject:", tempObject);
