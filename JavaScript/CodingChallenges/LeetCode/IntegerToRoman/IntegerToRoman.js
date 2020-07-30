/**
 * @param {number} num
 * @return {string}
 */

//  To runt his code, in terminal in this directory run "nodemon IntegerToRoman.js"

// TODO: refine parseFunction() by red green refactor.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Examples
// input = 1; // Output: "I"
// input = 2; // Output: "II"
// input = 3; // Output: "III"
// input = 4; // Output: "IV"
// input = 9; // Output: "IX"
// input = 58; // Output: "LVIII" // Explanation: L = 50, V = 5, III = 3.
input = 1994; // Output: "MCMXCIV" // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var arrayOfArrays = [["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]];
var array = [1, 5, 10, 50, 100, 500, 1000];

function shaveOff(input) {
    newArray = [];
    outerT = 6;
    while (outerT >= 0) {
        innerT = 0;
        while (input >= arrayOfArrays[outerT][1]) {
            input = input - arrayOfArrays[outerT][1];
            innerT++;
        }
        // console.log("input: ", input, "t: ", innerT);
        count = [innerT, arrayOfArrays[outerT][0]];
        // console.log(count);
        newArray.push(count);
        // console.log(newArray);
        outerT--;
    }

    // t=0;
    // while(input>arrayOfArrays[6][1]){
    //     input = input - arrayOfArrays[6][1];
    //     t++;   
    // }
    // console.log("input: ", input, "t: ", t);
    // count = [t, arrayOfArrays[6][0]];
    // console.log(count);

    // t=0;
    // while(input>arrayOfArrays[5][1]){
    //     input = input - arrayOfArrays[5][1];
    //     t++;   
    // }
    // console.log("input: ", input, "t: ", t);
    // count = [t, arrayOfArrays[5][0]];
    // console.log(count);

    // t=0;
    // while(input>arrayOfArrays[4][1]){
    //     input = input - arrayOfArrays[4][1];
    //     t++;   
    // }
    // console.log("input: ", input, "t: ", t);
    // count = [t, arrayOfArrays[4][0]];
    // console.log(count);


    // console.log("Original: ", input);
    // input = input - 1000;           // we removed 1 M
    // console.log("Next: ", input);
    // input = input - 500;           // we removed 1 D
    // console.log("Next: ", input);
    // input = input - 100;           // we removed 4 C
    // console.log("Next: ", input);
    // input = input - 100;
    // console.log("Next: ", input);
    // input = input - 100;
    // console.log("Next: ", input);
    // input = input - 100;
    // console.log("Next: ", input);
    // input = input - 50;           // we removed 1 L
    // console.log("Next: ", input);
    // input = input - 10;           // we removed 4 X
    // console.log("Next: ", input);
    // input = input - 10;
    // console.log("Next: ", input);
    // input = input - 10;
    // console.log("Next: ", input);
    // input = input - 10;
    // console.log("Next: ", input);
    // input = input - 1;           // we removed 4 I
    // console.log("Next: ", input);
    // input = input - 1;
    // console.log("Next: ", input);
    // input = input - 1;
    // console.log("Next: ", input);
    // input = input - 1;
    // console.log("Next: ", input);

    return newArray;
}
// shaveOff(input);

function parseFunction(input) { // this function takes the number and parses it out.
    // if(input<array[1]){
    //     console.log("how many I's are there?");

    // };


    output = [1, 1];
    return output;
}

function cancatinateFunction(parsedInput) {
    romanNumeralString = "";
    anArray = [[1, 'M'],
    [1, 'D'],
    [4, 'C'],
    [1, 'L'],
    [4, 'X'],
    [0, 'V'],
    [4, 'I']];
    console.log("MDCCCCLXXXXIIII");

    for (int=0; int< 7; int++){
        for (i=0; i< anArray[int][0]; i++){
            romanNumeralString += anArray[int][1];   
            }
    }

    // for (i=0; i< anArray[0][0]; i++){
    // romanNumeralString += anArray[0][1];   
    // }
    // for (i=0; i< anArray[1][0]; i++){
    // romanNumeralString +=  anArray[1][1];   
    // }
    // for (i=0; i< anArray[2][0]; i++){
    // romanNumeralString = romanNumeralString + anArray[2][1];   
    // }
    // for (i=0; i< anArray[3][0]; i++){
    // romanNumeralString = romanNumeralString + anArray[3][1];   
    // }
    // for (i=0; i< anArray[4][0]; i++){
    // romanNumeralString +=  anArray[4][1];   
    // }
    // for (i=0; i< anArray[5][0]; i++){
    // romanNumeralString +=  anArray[5][1];   
    // }
    // for (i=0; i< anArray[6][0]; i++){
    // romanNumeralString +=  anArray[6][1];   
    // }
    

    // romanNumeralString = romanNumeralString + "M";
    // romanNumeralString = romanNumeralString + "D";
    console.log(romanNumeralString);
    console.log(anArray);
    console.log(parsedInput);
}

// function switchFunction(numeral) {
//     var result;
//     switch (numeral) {
//         case 1:
//             result = "I";
//             break;
//         case 5:
//             result = "V";
//             break;
//         case 10:
//             result = "X";
//             break;
//         case 50:
//             result = "L";
//             break;
//         case 100:
//             result = "C";
//             break;
//         case 500:
//             result = "D";
//             break;
//         default:
//             result = "None of the options were choses.";
//     }
//     // console.log("the result is: ", result);
//     return result;
// }

function IntegerToRomans(input) {
    parsedInput = shaveOff(input);
    // console.log(parsedInput);
    cancatinateFunction(parsedInput);
    // console.log(parseFunction(input));
    // console.log(switchFunction(parseFunction(input)));
}
IntegerToRomans(input);