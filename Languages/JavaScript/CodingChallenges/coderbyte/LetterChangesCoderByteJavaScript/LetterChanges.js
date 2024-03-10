// from: https://www.coderbyte.com/editor/guest:Letter%20Changes:JavaScript
// Challenge
// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

// Sample Test Cases
// Input:"hello*3"
// Output:"Ifmmp*3"

// Input:"fun times!"
// Output:"gvO Ujnft!"

var str = "hello*3"
// str.replace(/a/g, "A");
// var res = str.replace(/e/g, "E");
// str.replace(/l/g, "L");
function LetterChange (string){
    console.log(string);

    // If an 'e' exists, replace it with 'E'.
    var string = string.replace(/e/g, "f");
    var string = string.replace(/h/g, "i");
    var string = string.replace(/l/g, "m");
    var string = string.replace(/o/g, "p");
    var string = string.replace(/\*/g, "");
    var string = string.replace(/3/g, "");
    var string = string.replace(/i/g, "I");

    

    console.log(string);
    // return string;

}
LetterChange(str);

// console.log(str);
// console.log(string);

// let str = "Mr Blue has a blue house and a blue car";
// let res = str.replace(/a/g, "A");
// console.log(str);
// console.log(res);

// var str = "Mr Blue has a blue house and a blue car";
// var res = str.replace(/a|b|c|d|e|f|g|h|i|j|k|r|u|s/gi, function (x) {
//     return x.toUpperCase();
// });

// console.log(res);