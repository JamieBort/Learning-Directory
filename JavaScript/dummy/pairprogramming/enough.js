const deleteNth = function(array, count){
  // Instantiate an empty array ('myArray')
  // Push the first element of 'array' into the new array
  // Check whether the second element of 'array' matches the first element of 'myArray'
  // If they are different, push the second element of 'array' into 'myArray'
  // If they are the same, check 'count'

  // let myArray = [];
  // // Instantiate an object ('myObject');
  // let myObject = {};
  // // Instantiate a variable called 'counter'
  // let counter = 1;
  // myArray.push(array[0]);
  // // Put array[0] into 'myObject' as a key, with a value of 1
  // myObject[1] = counter;
  // console.log(myObject, 'this is what myObject looks like');
  // if (array[0] !== array[1]) {
  //   myArray.push(array[1]);
  //   counter +=1;
  // } else {
  //   if (count !== 1) {
  //     // move onto the next element
  //     // myArray.push(array[1]);
  //     let myCheck = [];
  //     myCheck = myArray.filter(function(array){ myCheck.push(array[2]) })
  //     console.log(myCheck, 'my check')
  //   } else {
  //     // continue this process
  //     myArray.push(array[1])
  //   }
  // }


// jamie.first
// jamie[first]
//
//   let jamie = {
//     first: 'Jamie',
//     last: 'Bort',
//     age: 31
//   }



  let myArray = [];
  // Instantiate an object ('myObject')
  let myObject = {};
  // Check if the subsequent elements are already in 'myArray'
  for (let i = 0; i < array.length; i++) {
    // If so, check if the maximum number of occurrences has been reached
    if (array[i] in myObject) {
      // console.log(array[i] + ' is in the object as a key')
      // If the value of array[1] is less than or equal to the count
      if (myObject[array[i]] < count) {
        // Push the element into 'myArray'
        myArray.push(array[i]);
        // Increment the value of the key
        myObject[array[i]]++;
      }
    } else {
      // console.log(array[i] + ' is not in the object as a key')
      // Push the element into 'myArray'
      myArray.push(array[i]);
      // Put the key and value into 'myObject'
      myObject[array[i]] = 1;
    }
    // If not, push the new element into 'myArray'
    // Count how many times the element has occurred in 'myArray'

  }




  return myArray;
}


let arr = [1,2,3,1,2,3,1,3];
let ct = 3;

console.log(deleteNth(arr,ct));
