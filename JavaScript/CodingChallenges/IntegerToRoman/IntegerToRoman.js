/**
 * @param {number} num
 * @return {string}
 */

// const myObject = [
//     {
//         Symbol: "I",
//         Value: 1
//     },
//     {
//         Symbol: "V",
//         Value: 5
//     },
//     {
//         Symbol: "X",
//         Value: 10
//     },
//     {
//         Symbol: "L",
//         Value: 50
//     },
//     {
//         Symbol: "C",
//         Value: 100
//     },
//     {
//         Symbol: "D",
//         Value: 500
//     },
//     {
//         Symbol: "M",
//         Value: 1000
//     }
// ]
// console.log(myObject);

// const myObject2 = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
// }
// console.log(myObject2);

// special cases: 9 = 10 - 1. 4 = 5 - 1. 

// Define logic? Such that M > D, C, L, X, V, and I?

// const I = 1;
// const V = 5;
// const X = 10;
// const L = 50;
// const C = 100;
// const D = 500;
// const M = 1000;

// var string = "";
var intToRoman = function (num) {
    const I = 1;
    const V = 5;
    const X = 10;
    const L = 50;
    const C = 100;
    const D = 500;
    const M = 1000;

    var string = "";
    var multiples_of_M = (num - (num % M)) / M;
    var remainder_of_M = num % M;
    // console.log("Multiples of M: ", multiples_of_M);
    // console.log("The remainder from M is: ", remainder_of_M);
    for (let i = 0; i < multiples_of_M; i++) {
        string += "M";
    }

    if (remainder_of_M >= 999) {
        string += "CMXCIX";
        remainder_of_M -= 999;
    }

    if (remainder_of_M >= 995) {
        string += "CMXCV";
        remainder_of_M -= 995;
    }

    if (remainder_of_M >= 990) {
        string += "CMXC";
        remainder_of_M -= 990;
    }

    if (remainder_of_M >= 950) {
        string += "CML";
        remainder_of_M -= 950;
    }

    if (remainder_of_M >= 900) {
        string += "CM";
        remainder_of_M -= 900;
    }

    var multiples_of_D = (remainder_of_M - (remainder_of_M % D)) / D;
    var remainder_of_D = remainder_of_M % D;
    // console.log("Multiples of D: ", multiples_of_D);
    // console.log("The remainder from D is: ", remainder_of_D);
    for (let i = 0; i < multiples_of_D; i++) {
        string += "D";
    }

    if (remainder_of_D >= 499) {
        string += "CDXCIX";
        remainder_of_D -= 499;
    }

    if (remainder_of_D >= 490) {
        string += "CDXC";
        remainder_of_D -= 490;
    }

    if (remainder_of_D >= 450) {
        string += "CDL";
        remainder_of_D -= 450;
    }

    if (remainder_of_D >= 400) {
        string += "CD";
        remainder_of_D -= 400;
    }

    var multiples_of_C = (remainder_of_D - (remainder_of_D % C)) / C;
    var remainder_of_C = remainder_of_D % C;
    // console.log("Multiples of C: ", multiples_of_C);
    // console.log("The remainder from C is: ", remainder_of_C);
    for (let i = 0; i < multiples_of_C; i++) {
        string += "C";
    }

    if (remainder_of_C >= 99) {
        string += "XCIX";
        remainder_of_C -= 99;
    }

    if (remainder_of_C >= 95) {
        string += "XCV";
        remainder_of_C -= 95;
    }

    if (remainder_of_C >= 90) {
        string += "XC";
        remainder_of_C -= 90;
    }

    var multiples_of_L = (remainder_of_C - (remainder_of_C % L)) / L;
    var remainder_of_L = remainder_of_C % L;
    // console.log("Multiples of L: ", multiples_of_L);
    // console.log("The remainder from L is: ", remainder_of_L);
    for (let i = 0; i < multiples_of_L; i++) {
        string += "L";
    }

    if (remainder_of_L >= 49) {
        string += "XLIX";
        remainder_of_L -= 49;
    }

    if (remainder_of_L >= 45) {
        string += "XLV";
        remainder_of_L -= 45;
    }

    if (remainder_of_L >= 40) {
        string += "XL";
        remainder_of_L -= 40;
    }

    var multiples_of_X = (remainder_of_L - (remainder_of_L % X)) / X;
    var remainder_of_X = remainder_of_L % X;
    // console.log("Multiples of X: ", multiples_of_X);
    // console.log("The remainder from X is: ", remainder_of_X);
    for (let i = 0; i < multiples_of_X; i++) {
        string += "X";
    }

    if (remainder_of_X === 9) {
        string += "IX";
        remainder_of_X -= 9;
    }

    var multiples_of_V = (remainder_of_X - (remainder_of_X % V)) / V;
    var remainder_of_V = remainder_of_X % V;
    // console.log("Multiples of V: ", multiples_of_V);
    // console.log("The remainder from V is: ", remainder_of_V);

    for (let i = 0; i < multiples_of_V; i++) {
        string += "V";
    }

    var multiples_of_I = (remainder_of_V - (remainder_of_V % I)) / I;
    var remainder_of_I = remainder_of_V % I;
    // console.log("Multiples of I: ", multiples_of_I);
    // console.log("The remainder is: ", remainder_of_I);
    if (multiples_of_I === 4) {
        string += "IV";
        multiples_of_I -= 4; // Is this line necessary?
    } else {
        for (let i = 0; i < multiples_of_I; i++) {
            string += "I";
        }
    }
    // console.log(string);
    return string;
};

intToRoman(45);
// for 4, want IV
// for 14, want XIV
// for 49, want IL.


// var string = "";
// console.log("this is my string: ",string);
// var intToRoman = function (num) {
//     for (let i = 0; i < num; i++) {
//         string += "I";
//         console.log("this is my string: ",string);
//     }
// };

// intToRoman(4);

// Input: 3 intToRoman(3);
// Output: "III"

// Input: 4 intToRoman(4);
// Output: "IV"