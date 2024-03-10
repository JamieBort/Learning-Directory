// ./scratch01.js

// // Good example:
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//     // reject("THERE WAS AN ERROR!!!!!");
//   }, 3000);
// });

// myPromise
//   .then((value) => `${value} and bar`)
//   .then((value) => `${value} and bar again`)
//   .then((value) => `${value} and again`)
//   .then((value) => `${value} and again`)
//   .then((value) => {
//     console.log("value:", value);
//   })
//   .catch((err) => {
//     console.error("err:", err);
//   });

const doSomething = (param01 = "optional parameter") => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    if (param01 === 3) resolve("The promise was resolved.");
    else reject("The promise was rejected.");
    // }, 2000);
  });
};

const firstOption = doSomething(3);
const secondOption = doSomething();

firstOption.then((resolved) => console.log(resolved)).catch((reason) => console.log(reason));
//   .finally(console.log("This line of code always runs."));

secondOption.then((resolved) => console.log(resolved)).catch((reason) => console.log(reason));
//   .finally(console.log("This line of code always runs."));
