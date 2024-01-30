// attempt02.js

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

// Check whether the key in the object is a string or not.
const check = (param) => {
  if (typeof param === "string") return true;
  else return false;
};

const tempObject = {};
for (const key in dict) {
  // console.log("key:", key);
  // console.log("dict[key]:", dict[key]);

  // console.log(`key:${key}, check(dict[key]):${check(dict[key])}`);
  if (check(dict[key])) {
    // if (typeof dict[key] === "string") {
    // console.log(key, "is a string. Add it to the new object, tempObject.");
    tempObject[key] = dict[key];
  } else {
    console.log(key, "is NOT a string. Check it's values.");
    for (const key2 in dict[key]) {
      // console.log("key2:", key2);
      // console.log("dict[key][key2]:", dict[key][key2]);
      if (check(dict[key][key2])) {
        tempObject[key2] = dict[key][key2];
      } else console.log(key2, "is NOT a string. Check it's values.");
    }
  }
}

console.log("tempObject:", tempObject);
