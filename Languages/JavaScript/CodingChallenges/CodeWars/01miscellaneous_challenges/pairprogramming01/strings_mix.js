function mix(s1, s2) {
  let characters = [];
  // Start with the first character, parse the string and tally up how many a's we find
  for (let i = 97; i < 123; i++) {
    let bigger = '';
    let aCount = 0;
    let bCount = 0;
    for (let j = 0; j < s1.length; j++) {
      //Count characters in s1 (aCount)
      if (s1.charCodeAt(j) === i) {
        aCount += 1;
      }
    }
    for (let j = 0; j < s2.length; j++) {
      //Count characters in s2 (bCount)
      if (s2.charCodeAt(j) === i) {
        bCount += 1;
      }
    }
    //Compare and store
    let count = 0;
    let foo = '';
    if (aCount > bCount) {
      // value = [aCount, '1']
      count = aCount;
      foo = '1'
    } else if (bCount > aCount) {
      // value = [bCount, '2']
      count = bCount;
      foo = '2'
    } else {
      // value = [aCount, '=']
      count = aCount;
      foo = '='
    }
    // characters[key]   value;
    characters.push({letter: String.fromCharCode(i), frequency: count, string: foo});
  }
  characters.sort(function(a,b){
    return b.string-a.string;
  })
  console.log(characters, 'sorted by string');
  characters.sort(function(a,b){
    return b.frequency-a.frequency
  })
  console.log(characters);
  // Do the same thing with string 2
  // Whichever one has the higher value, put it into an object of arrays with length 3
  // In each array: character, frequency, and string
  // If it's in both strings, string is ':'

// [
//   {letter: 'a', frequency: 5, string: '1' }, 0
//   {letter: 'b', frequency: 3, string: '2' }, 1
//   {letter: 'c', frequency: 4, string: '1' }, 2
// ]
  let output = '';
  // If frequency of key a is greater than 1, let's make a string out of it and produce an output
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].frequency > 1) {
      output += characters[i].string + ':';
      for (j = 0; j < characters[i].frequency; j++) {
        output += characters[i].letter;
      }
      output += '/';
    }
  }
  output = output.slice(0, output.length - 1);

  // if (characters.a[0] > 1) {
  //   output += characters.a[1] + ':'
  //   for (i = 0; i < characters.a[0]; i++) {
  //     output += 'a';
  //   }
  // }
  return output
}

let string1 = 'aaaaa bbb cccc dd eee';
let string2 = 'aaaa bbb dd';

console.log(mix(string1, string2));
// expected output: "1:aaaaa/2:bbb/1:cccc/=:dd"
