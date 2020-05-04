// from: https://www.coderbyte.com/editor/guest:Alphabet%20Soup:JavaScript
// Challenge
// Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 
// Sample Test Cases
// Input:"coderbyte"
// Output:"bcdeeorty"

// Input:"hooplah"
// Output:"ahhloop"

var str = "hooplah";
var array = [];

function AlphabetSoup(str) {

    // put each letter in one array.
    for (i = 0; i < str.length; i++) {
        array.push(str.slice(i, i + 1));
    }
    console.log(array);

    // Sort array.
    array.sort();
    console.log(array);

    // Put letters back in the original string.
    str = "";
    for (i = 0; i < array.length; i++) {
        str += array[i];
    }
    console.log(str);

    return str;

}

AlphabetSoup(str);