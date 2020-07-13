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
input = 3; // Output: "III"
// input: 4 // Output: "IV"
// input: 9 // Output: "IX"
// input: 58 // Output: "LVIII" // Explanation: L = 50, V = 5, III = 3.
// input: 1994 // Output: "MCMXCIV" // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

  var arrayOfArrays = [["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]];
  var array = [1,5,10,100,500,1000];
//  console.log(arrayOfArrays[0][0]);
//  console.log(arrayOfArrays[0][1]);
 var car = {type:"Fiat", model:"500", color:"white"};
//  console.log('type' in car);

function parseFunction(input){
    // find how many times 5 goes into 3.
    // It's zero times.
    // if input >= 500, then
    if(input < array[1]){
        // how many times does 1 go into 3?
        // console.log(input - input % array[0]);
        // So we use the array[0] item, input - input % array[0] times.
        // so call switchFunction(array[0]) input - input % array[0] times.
        tally = input - input % array[0];
        array2=[tally,array[0]];
        return array2;
    }
    else {console.log(input ,">=", array[0]);}
        // else how many times does 500 go into input?
        // if input < 100....
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
        result = "None of the options were choses.";
    }
    // console.log("the result is: ", result);
    return result;
}


function IntegerToRomans(input){
    // let romanNumberal = "";
    
    
    let parse = parseFunction(input);
    console.log(parse);
    a=b="";
    t=0;
    while(t < parse[0]){
        // TODO: concatenate the strings.
        a = switchFunction(parse[1]);
        b=b+a;
        console.log(b);
        t++;
    }
 }
 IntegerToRomans(input);