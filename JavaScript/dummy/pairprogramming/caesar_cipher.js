const caesar = function(message, codeword) {
  //Tell the function how to use the codeword (pair it with positions in the alphabet)
  //Apply those positions to the message
  //We'll get errors because the case won't be preserved, but we can fix those

  //Iterate through the codeword
  //The first character of 'codeword' is assigned to
  // j tells t how many to move forward
  //iterate through the message

  // 'codeArray' is going to be the number of moves for each character in 'codeword'
  codeword = codeword.toLowerCase();
  let codeArray = [];
  //Iterate through 'codeword'
  for (let i = 0; i < codeword.length; i++) {
    codeArray[i] = codeword.charCodeAt(i) - 96;

  }




  //Iterate through the 'message'
  //Apply the letter shifts from 'codeArray'
  let encodedMessage = [];
  let codeCounter = 0;
  for (let i = 0; i < message.length; i++) {
    //When i = 0, 't' + 'j'

    // If a character is lower-case, do your magic
    if ((message.charCodeAt(i) > 96 && message.charCodeAt(i) < 123) || ( message.charCodeAt(i) > 64 && message.charCodeAt(i) < 91 )) {

      // If the stuff rolls past 'z', subtract 26

      if (( message.charCodeAt(i) + codeArray[codeCounter] > 122) || ( message.charCodeAt(i) < 91 && message.charCodeAt(i) + codeArray[codeCounter] > 90 )) {
        encodedMessage.push(String.fromCharCode(message.charCodeAt(i) + codeArray[codeCounter] - 26));
      } else {
        encodedMessage.push(String.fromCharCode(message.charCodeAt(i) + codeArray[codeCounter]));
      }
      codeCounter++;
      if (codeCounter === 5) {
        codeCounter = 0;
      }
      //If a character is non-alphabetic, ignore it and just push it into the array without changing it
    } else {
      encodedMessage.push(message[i])
    }
  }

  return encodedMessage.join('');
}


const phrase = 'This is a message, and I am sending it to you.';

const secret = 'Jamie';

console.log(caesar(phrase, secret));
