// As a group, review and discuss what's hppening in the example below
let p = new Promise( function(res, rej) {
    setTimeout( function () {
        return res(1);
    }, 1000)
});

p.then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then( function (v) { //--> new Promise
        console.log(v);
    })

function add1(v) {
  return v + 1
}


// Write a function `multiplyLog` that accepts a callback and a number as it's arguments.
// `multiplyLog` should multiply the number argument by 2 and store the sum
// `multiplyLog` should then invoke the callback function,
// and pass the previously calculated sum to the callback function.
// Next, write a function `logger` that accepts a number argument,
// and console logs 'The number is <number argument>'
// Ex:
// multiplyLog(logger, 2); // 'The number is 4'




// Write a new promise that responds with a message



// Write a new promise that accepts and calls a callback function
