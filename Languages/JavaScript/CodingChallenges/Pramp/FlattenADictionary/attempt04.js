// attempt04.js

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
const check = (param02) => {
  if (typeof param02 === "string") {
    console.log(`${param02} is a string. Add it to the new object.`);
    return true;
  } else {
    console.log(
      `${param02} is NOT a string. Iterate through it to see if those keys are strings.`,
    );
    // console.log("stringify:", JSON.stringify(param02));
    return false;
  }
};

// iterate through the object
const iterateThroughObject = (param01) => {
  // const tempObject = {};
  let tempKey = "";
  for (const key in param01) {
    console.log("key:", key);
    // tempKey = key;
    // console.log("key = tempKey:", tempKey);
    const value = param01[key];
    if (check(value)) {
      tempObject[key] = value;
      // tempObject[tempKey] = value;
      // tempKey = "";
    } else {
      console.log("Check the keys of ", key);
      // console.log("the first:", Object.keys(param01[key])[0]);
      // tempKey += "".concat(".", Object.keys(param01[key])[0]);
      // console.log("tempKey concat:", tempKey);

      iterateThroughObject(param01[key]);
    }
  }
  // return tempObject;
};

// console.log("tempObject:", iterateThroughObject(dict));
iterateThroughObject(dict);
console.log("tempObject:", tempObject);
