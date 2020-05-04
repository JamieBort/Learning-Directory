// from https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
// From Tuesday, 6 November 2018.
// Pair programmed with Josh.
// Final not submitted.

function removeSmallest(numbers) {
    // Initialize an array that is the same as numbers.
    // Initialize an index called 'lowIndex' that will be the index of the smallest value.
    // Iterate through the array comparing the value of each term to the value of lowInext term.
    // If the value is less than the low index value, replace index with current index.
    // Last, splice the low index value from the array.
    
    let lowIndex = 0;

    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] < numbers[lowIndex]){
            lowIndex = i;
        }
    }
    let array = [];
    for(let i = 0; i < numbers.length; i++){
        if(i !== lowIndex){
            array.push(numbers[i]);
        }
    }
    return array;

  }