// Write a function that will take in two parameters: a string to be encoded and a number (n) that will shift each alphabetic character in the string n positions in the alphabet.  For instance, if the string is "hello, world" with a shift of 1, the function will return "ifmmp, xpsme"

const encode = function(string, n) {
  // Initialize an array that represents the string
  let array = [];
  // If a character is alphabetic, do your magic
for (let i = 0; i < string.length; i++) {
  array.push(string[i])
  //If a character is alphabetic, do your magic
  if (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123) {
    //Shift letters according to the number (n);
    //Add the variable n to the character to get the encoded character
    
  }
}
  return array;
}

let message = 'hello, world';

let number = 1;

console.log(encode(message,number));
