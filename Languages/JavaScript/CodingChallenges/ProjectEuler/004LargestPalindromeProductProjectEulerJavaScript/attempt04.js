// attempt03

const a = 999;
let b = 999;
const multiply = (a,b) => a*b;
let result = multiply(a,b);
let length = result.toString().length;
const checkFunction = (param1,param2) => {
    // // compare the two numbers
    //     // if they're the same, return true
    //     // if they're not the same, return false

    if(param1===param2) return true;
    return false;
};

// param.toString()[0]

// pseudocode
// multiply the two numbers
// check to see if the two outer numbers are equal
    // if the two outer numbers are equal, stop
    // if the two outer numbers are not equal, 
        // decrease b number by 1
        // multiply the two numbers
        // check to see if the two outer numbers are equal

        // console.log("a:",a);
        // console.log("b:",b);

first = result.toString()[0];
second = result.toString()[length-1];
console.log("first:",first);
console.log("second:",second);

while (first != second) {
    result = multiply(a,b);
    first = result.toString()[0];
    second = result.toString()[length-1];
    console.log("result:",result);
    console.log("first:",first);
    console.log("second:",second);
    if(checkFunction(first,second)) {
        console.log("we're done");
    }
    else {
        console.log("we're NOT done");
        b--;
    }
}

// first = result.toString()[1];
// second = result.toString()[length-2];
// console.log("first:",first);
// console.log("second:",second);

// while (first != second) {
//     result = multiply(a,b);
//     first = result.toString()[1];
//     second = result.toString()[length-2];
//     console.log("result:",result);
//     console.log("first:",first);
//     console.log("second:",second);
//     if(checkFunction(first,second)) {
//         console.log("we're done");
//     }
//     else {
//         console.log("we're NOT done");
//         b--;
//     }
// }