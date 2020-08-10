// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// 1 // given
// 2  = given + 1 = 1 + 1;
// 3  = 1 + 2 
// 5  = 2 + 3
// 8  = 3 + 5
// 13 = 5 + 8
//...

// var TopFibonacciSequenceValue = 4000000;
var TopFibonacciSequenceValue = 6;

check = () => {
    if (numArray[0] % 2 == 0) {
        d += numArray[0];
        console.log("The sum is: ", d);
    }
};

var numArray = [];
var a = 1; // given
var d = 0;
numArray[0] = a;
console.log(numArray); // 1
check();

var b = 1 + a;
numArray[0] = b;
console.log(numArray); // 2
check();

var c = b + a;
numArray[0] = c;
console.log(numArray); // 3
check();

for (let index = 0; index < TopFibonacciSequenceValue; index++) {
    a = b + c;
    numArray[0] = a;
    console.log(numArray); // 5
    check();

    b = c + a;
    numArray[0] = b;
    console.log(numArray); // 8
    check();

    c = b + a;
    numArray[0] = c;
    console.log(numArray); // 13
    check();
}
// a = b + c;
// numArray[0] = a;
// console.log(numArray); // 5
// check();

// b = c + a;
// numArray[0] = b;
// console.log(numArray); // 8
// check();

// c = b + a;
// numArray[0] = c;
// console.log(numArray); // 13
// check();