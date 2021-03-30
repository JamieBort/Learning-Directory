// Challenge
// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

// Sample Test Cases
// Input:"hello*3"
// Output:"Ifmmp*3"

// Input:"fun times!"
// Output:"gvO Ujnft!"

var str = "hello*3"
function LetterChange(string) {
    let tempString = "";
    console.log("letter at place 0: ", str.charAt(0));
    console.log("code for first element:", str.charCodeAt(0));
    tempString += String.fromCharCode(str.charCodeAt(0)+1);
    console.log("tempString: ", tempString);







    // console.log("tempString: ", tempString);
    // tempString+="a";
    // tempString += String.fromCharCode(189, 43, 190, 61);
    // console.log("tempString: ", tempString);

    // console.log("letter at place 1: ",str.charAt(0));// returns letter at the 1 place.
    // const abc = String.fromCharCode(189, 43, 190, 61);
    // console.log("abc: ", abc);

    // str.at(3);
    // console.log("code for first element:",str.charCodeAt(0));

}
LetterChange(str);