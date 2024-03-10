function wave(string){
  let array = [];
  //If the string is empty, don't do anything, maybe return the empty string
  if (string == '') {
    return string;
  }
  //Capitalize the first character of the string
  //Push the string into an array
  //Capitalize the second character of the string
  //Push the string into the array
  //...
  for (i = 0; i < string.length; i++) {
    //Make a placeholder word
    let word = '';
    //Iterate through the string
    //Concatinate into the placeholder word
    //For letter i, use toUpperCase()
    for (j = 0; j < string.length; j++) {
        let letter = string[j];
        if (i == j) {
          letter = string[j].toUpperCase();
        }
        word += letter;
    }
    array.push(word);
  }


  //Return the array of strings
  return array;
}

let string = 'taco';

console.log(wave(string));
