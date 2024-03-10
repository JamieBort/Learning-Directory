const sqInRect = function(length, width) {
  //Take the shortest side, make a square out of that
  //This gives us the largest square we can make out of the rectangle
  //When we take the largest square that will fit off of the first rectangle, we will have a leftover smaller rectangle
  //Repeat as necessary, until there's no rectangle leftover


  //Initialize an empty array
  let array = [];
  // Ask the question "what's w?"  Then remove w from l
  // Push smaller dimension into the array
  // Subtract smaller dimension from the longer dimension
  while (width > 0 && length > 0){
    if (length < width) {
      // console.log(length + ' is shorter than ' + width);
      // console.log('pushing length into the array');
      array.push(length);
      width -= length;
    } else if (width < length) {
      // console.log(width + ' is shorter than ' + length);
      // console.log('pushing width into the array');
      array.push(width);
      length -= width;em
    } else {
      // console.log('it is a square of dimension ' + width)
      array.push(width);
      length -= width;
      width -= width;
    }
  }
  //Rectangle 5x3
  //Remove 3 from length (and push into array)

  //Rectangle 2x3
  //Remove 2 from width (and push into array)

  //Rectangle 2x1
  //Remove 1 from length (and push into array)

  //Rectangle 1x1
  //Remove 1 from both sides (and push into array)



  //Return an array with the sides of the squares that are taken out of the original rectangle
  return array;
}

let l = 5;
let w = 3;

console.log(sqInRect(l,w));

//   sqInRect(5, 3) should return [3, 2, 1, 1]
