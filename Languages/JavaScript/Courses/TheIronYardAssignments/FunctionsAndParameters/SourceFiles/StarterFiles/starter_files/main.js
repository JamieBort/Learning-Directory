// 1.
// Complete the following function
// It should return `true` if the first argument is greater than the second and `false` if not
// Use the greater than operator `>`
function greaterThan (num1, num2) {
  return;
}

console.log(greaterThan(3, 2) === true);


// 2.
// Call the `greaterThan` function in the condition for the following if statement
// Provide arguments to `greaterThan` which make the if statement log 'Less than or equal to'
if (greaterThan()) {
  console.log('Greater than');
} else {
  console.log('Less than or equal to');
}


// 3.
// Refactor the `lessThan` function to match the following specs:
// It returns 'Less than' if the first argument is less than the second
// It returns 'Greater than' if the first argument is greater than the second
// It returns 'Equal to' if the first argument is equal to the second
function lessThan (num1, num2) {
  // Your answer here
}

console.log(lessThan(2, 3) === 'Less than');
console.log(lessThan(2, 1) === 'Greater than');
console.log(lessThan(2, 2) === 'Equal to');


// 4.
// The below assertion does not work. 
// The function addNumbers needs to be created
let twoPlusTwo = addNumbers(2, 2);

console.log(twoPlusTwo === 4)
