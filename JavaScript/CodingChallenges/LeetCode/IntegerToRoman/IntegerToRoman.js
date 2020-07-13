/**
 * @param {number} num
 * @return {string}
 */

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Examples
input = 500; // Output: "III"
// input: 4 // Output: "IV"
// input: 9 // Output: "IX"
// input: 58 // Output: "LVIII" // Explanation: L = 50, V = 5, III = 3.
// input: 1994 // Output: "MCMXCIV" // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

  var arrayOfArrays = [["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]];
//  console.log(arrayOfArrays[0][0]);
//  console.log(arrayOfArrays[0][1]);
 var car = {type:"Fiat", model:"500", color:"white"};
//  console.log('type' in car);

function parseFunction(input){
    // find how many times 5 goes into 3.
    // It's zero times.
    // if input >= 500, then
    if(input >= 500){
        // console.log(input % 500);
        console.log(10-10%7);
        return 500 % input;
    }
        // else how many times does 500 go into input?
        // if input < 100....
    console.log("this function parses the nubmer and calls the switch funcion each time.");
    // switchFunction();
}

function switchFunction(numeral){
    var result;
    switch(numeral) {
        case 1:
        result = "I";
        break;
        case 5:
        result = "V";
        break;
        case 10:
        result = "X";
        break;
        case 50:
        result = "L";
        break;
        case 100:
        result = "C";
        break;
        case 500:
        result = "D";
        break;
        default:
        result = "I have never heard of that fruit...";
    }
    console.log(result);
    return result;
}

 function IntegerToRomans(input){
     parseFunction(input);

    //  romanNumeral = "III";
    //  console.log(romanNumeral);
    //  return romanNumeral;
 }
 IntegerToRomans(input);