// from: https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e

// variables declared using "var" can be redeclared
// variables declared using "var" can be reassigned a value

var greeter = "hey hi";
var greeter = 2;
console.log(greeter);
var times = 4;
if (times > 3){ var greeter = "say Hello instead";}
console.log(greeter);

// variables declared using "let" cannot be redeclared
// variables declared using "let" cannot be reassigned a value

// let hello = "say Hi"; // this one throws an error when it is commented out. Because "let" is block scopped. Meaning it cannot be accessed outside of the if statement.
// let greeter = "say Hi";
// let times = 4;
// if (times > 3){ 
//     let hello = "say Hello instead";
//     console.log(hello);
// }
// console.log(hello);


// function newFunction() { var hello = "hello";}

// console.log(hello);
// var greeter;
// greeter = "say Hello instead";

// console.log(greeter);

// greeter = "say Hello instead";