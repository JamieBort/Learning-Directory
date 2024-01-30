// attempt01.js

// // input:
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

// // output:
//  {
//     "Key1" : "1",
//     "Key2.a" : "2",
//     "Key2.b" : "3",
//     "Key2.c.d" : "3",
//     "Key2.c.e" : "1"
// }

// function flattenDictionary(params) {
//   const tempObject = {};
//   const dummyObject = { a: "beans" };
//   console.log(check(dummyObject.a));
//   //   check(params)
//   function check(params) {
//     console.log(typeof params);
//     // If params != "", call myRecursiveFunction() to flatten it.
//     if (typeof params != "") {
//       // Build the tempObject;
//       console.log("We need to call the recursive function.");
//       //   myRecursiveFunction(params);
//       return 3;
//     }
//     // If params === "", return params
//     else return params;
//   }

//   // This function will flatten the object.
//   function myRecursiveFunction(params) {}
//   return tempObject;
// }

// console.log(flattenDictionary(dict));

// for (const iterator of dict) {
//   console.log("iterator:", iterator);
// }

const tempObject = {};
for (const key in dict) {
  //   if (Object.hasOwnProperty.call(dict, key)) {
  //     const element = dict[key];
  //     console.log("element:", element);
  //   }
  //   console.log("key:", key);

  if (typeof dict[key] === "string") {
    console.log("Add dict[key] to the tempObject.", key);
    // console.log("Add it to the tempObject.dict[key]", dict[key]);
    tempObject[key] = dict[key];
  } else {
    console.log("dict[key] is not a string.", key);
    console.log("Check the keys of dict[key].", key);
  }
  // } else console.log("Not a string.", dict[key]);
}
console.log("tempObject:", tempObject);
