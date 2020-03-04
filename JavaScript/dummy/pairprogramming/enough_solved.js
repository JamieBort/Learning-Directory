const deleteNth = function(array, count){
  // Initialize an empty array that will be returned at the end ('myArray');
  let myArray = [];
  // Initialize a counter object to keep track of how many of each value in 'array' exist
  let counter = {};
  // Iterate through 'array' to count how many times each value exists
  for (let i = 0; i < array.length; i++) {
    if (counter[array[i]]) {
      counter[array[i]]++;
    } else {
      counter[array[i]] = 1;
    }
  }
  console.log(counter, 'unedited counter');
  // Iterate through the counter
  for (key in counter) {
    // If the value of a particular key is greater than the count variable,
    if (counter[key] > count) {
      // knock it back down to the count variable
      counter[key] = count;
    }
  }
  console.log(counter, 'edited counter');
  // Iterate through 'array' one more time
  for (let i = 0; i < array.length; i++) {
    // If the counter for that value is greater than zero
    if (counter[array[i]] > 0) {
      myArray.push(array[i]);
      counter[array[i]]--;

    }
    // Push the value into 'myArray' and decrement the value
  }
  // Return 'myArray'
  return myArray;
}


let arr = [1,2,3,1,2,3,1,2,3];
let ct = 2;

console.log(deleteNth(arr,ct));
