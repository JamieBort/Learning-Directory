// The goal is to start with this array:
let numbers = [4, 5, 1, 8, 9, 2];
// and produce the following output: [1, 2, 4, 5, 8, 9]

// What you'll need to do, is to create a function called bubbleSort that takes a single parameter called list and have it return the above result. You can use this as your starter code:


let numbers = [4, 5, 1, 8, 9, 2];
console.log(numbers);

function bubbleSort(list) {
  for (var i = 0; i < list.length; i++) {

    if (list[i] > list[i + 1]) {
      numbers.pop(list[i]);
      numbers.push(list[i]);
    }

    return console.log(list);
  }
}
bubbleSort(numbers);
console.log(numbers);
