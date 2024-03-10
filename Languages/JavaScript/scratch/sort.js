// let Array = [5, 32, 5, 1, 31, 70, 30, 8];

// Array.sort(function compareFunction(a, b) { // Can be annonomous. I included 'compareFunction' to help reinforce the syntax.
//     return a - b;
//     // return b - a;
//   });

//   console.log(Array);

var diff = 2;
let numbers = [5, 32, 5, 1, 31, 70, 30, 8];
let indices = [];
for (i = 0; i < numbers.length; i++) {
    for (j = 0; j < numbers.length; j++) {
        if ( (Math.abs(numbers[j] - numbers[i]) <= diff) && (i != j) ) {
            // console.log("pushing " + this.numbers[j]);
            indices.push(numbers[i]);
        }
    }
}
console.log(indices);