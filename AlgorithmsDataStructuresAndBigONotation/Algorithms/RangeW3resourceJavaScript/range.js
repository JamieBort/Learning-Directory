// from: https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php

// Write a JavaScript program to get the integers in range (x, y). Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
// Click me to see the solution.

function ranger (x,y){
    let array = [];
    for (i=x+1; i<y; i++) {
        array.push(i);
    }
    return array;
}

console.log(ranger(2,9));