// to cover tomorrow:
// promises,
// try/catch block,
// event loop,
// debugging

// Promises

// Situations where we will encounter promises.
// 1. new Promise()
// 2. API calls

// Documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// Promise 1
{
  // let promise01 = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve(true), 1000);
  // });
  // promise01
  //   .then((result) => console.log(`The FIRST promise resoled. The result is:\n`, result, `\n`))
  //   .catch((error) => console.log(`There was an error with the FIRST promise. This is the error:\n`, `*** `, error, ` ***\n`))
  //   .finally(() => console.log(`This block of code executes regardless of the result of the promise.\n\n`));
}

// Promise 2
{
  // let promise02 = new Promise((resolve, reject) => setTimeout(() => resolve({ status: true, length: 7 }), 1000));
  // promise02
  //   .then((result) => console.log(`The SECOND promise resolved. The result of the second promise:\n`, result, `\n`))
  //   .catch((error) => console.log(`There was an error with the SECOND promise. This is the error:\n`, `*** `, error, ` ***\n`))
  //   .finally(() => console.log(`This block of code executes regardless of the result of the promise.\n\n`));
}

//   Promise 3
{
  // let promise03 = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     return reject("There was a problem!");
  //   }, 1000);
  // });
  // promise03
  //   .then((result) => console.log(`The THIRD promise resolved. The result of the third promise:\n`, result, `\n`))
  //   .catch((error) => console.log(`There was an error with the THIRD promise. This is the error:\n`, `*** `, error, ` ***\n`))
  //   .finally(() => console.log(`This block of code executes regardless of the result of the promise.\n\n`));
}

// Promise 4
{
  // const onFulfilled = (param01) => console.log("The FOURTH promise was fulfilled.", param01, `\n`);
  // const onRejected = (param01) => console.log("The FOURTH promise was NOT fulfilled.", param01, `\n`);
  // let promise04 = new Promise(function (resolve, reject) {
  //   setTimeout(() => reject("There was a problem again!"), 1000);
  // });
  //   promise04.then(onFulfilled, onRejected).catch((error) => console.log(`There was an error with the FOURTH promise. This is the error:\n`, `*** `, error, ` ***\n`));
}

// Promise 5
{
  // let promise05 = new Promise(function (resolve, reject) {
  //   setTimeout(() => resolve({ status: true, length: 7 }), 1000);
  // });
  //   promise05
  //     .then(
  //       (result) => console.log("The FIFTH promise was fulfilled.", result, `\n`),
  //       (reason) => console.log("The FIFTH promise was NOT fulfilled.", reason, `\n`),
  //     )
  //     .catch((error) => console.log(`There was an error with the FIFTH promise. This is the error:\n`, `*** `, error, ` ***\n`));
}
