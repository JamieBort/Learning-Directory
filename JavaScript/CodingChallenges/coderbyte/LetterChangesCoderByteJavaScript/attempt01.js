// Challenge
// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

// Sample Test Cases
// const str = "hello*3"; // Input
// Output:"Ifmmp*3"

// const str ="fun times!" // Input
// Output:"gvO Ujnft!"

const str = "zoo";
// A-Z is 65-90, a-z is 97-122
function LetterChange(string) {
    let tempString = "";
    for (let letter of str) {
        if ((letter.charCodeAt() > 64 && letter.charCodeAt() < 91) || (letter.charCodeAt() > 96 && letter.charCodeAt() < 123)) { // checks if the character is a-z or A-Z
            if (letter.charCodeAt() == 122) { tempString += String.fromCharCode(letter.charCodeAt() - 25) }
            else if (letter.charCodeAt() == 100 || letter.charCodeAt() == 104 || letter.charCodeAt() == 110 || letter.charCodeAt() == 116) { // checks if the character is a vowel.
                let temp = String.fromCharCode(letter.charCodeAt() - 31); // if so, reasign it by subtracting 31 from it.
                let temp2 =temp.toUpperCase();
                console.lot(temp2);
                tempString += temp2;

// console.log("tempString");
            }
            else { tempString += String.fromCharCode(letter.charCodeAt() + 1); } // if not, reassign it by adding 1 to it.
        }
        else { tempString += letter; } // if not, reappend it to the string.
    }
    console.log(tempString);
}
LetterChange(str);