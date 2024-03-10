//Write a function "camelBreak" that takes in a camel-cased string and returns a string without spaces (don't worry about making the capitals lowercase in returned string)

const camelBreak = function(string) {
  // Initialize an empty array (messageArray)
  // Push each character into messageArray
  // Check for a capitalized letter
  // Put a space at the index of the capitalized letter
  // Push the array back to the original string
  // let messageArray = [];
  // for (let i = 0; i < string.length; i++) {
  //   messageArray.push(string[i]);
  //   // If a letter is a capital, do something
  //   if (messageArray[i])
  // }

  let messageArray = string.split('');
  console.log(messageArray);

  let messageString = '';
  for (let i = 0; i < string.length; i++) {
    //If a letter is capital
    if (message.charCodeAt(i) < 91 && message.charCodeAt(i) > 64) {
      messageString += ' ';
    }
    messageString += string[i];
  }



  // If the character is a capital letter, do something
  // Z = 90, A = 65
  // for (let i = 0; i < messageArray.length; i++) {
  //   // If a letter is capital, put a space into the array
  //   // array.splice(where you start, how much to cut, what to put in)
  //   if (messageArray[i] < 91 && messageArray[i] > 64) {
  //     messageArray.splice(i, 0, ' ');
  //
  //   }
  //   console.log(messageArray, 'the array after we put in some spaces')
  // }

  return messageString;

};





let message = 'jamieIsACodeNinja'

console.log(camelBreak(message));

//returns 'jamie Is A Code Ninja'
