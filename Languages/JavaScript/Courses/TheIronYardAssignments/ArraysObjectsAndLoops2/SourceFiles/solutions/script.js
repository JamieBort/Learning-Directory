/*
In this activity, your task is to complete the unfinished functions. Instructions accompany each function explaining what the function should do and what value it should return. You will implement logic using loops, conditional statements, arrays, and objects to return the values specified in the instructions.

The `test.js` file contains tests for all of the functions in this activity. Do not change any code in `test.js`. To see the output from `test.js` and to evaluate your work, open `index.html` in Chrome and view the console in the Developer Tools. You'll know that you are finding success when all of the `console.log` statements print 'true'.
*/



/*
1. Iterate over `numberArray` and multiply each number by the iterator `i`. Then, add all of the values in `numberArray` together to produce a single large number. Return the large number.

HINT: You will need to initialize a variable to store the total number and to return the final value.

Answer: This function should return the number 18406.
*/
let numberArray = [ 23, 234, 64 , 89, 2, 756, 3, 58, 674, 32, 756, 23, 6 ];

function getBigNumber(){
    // Your answer goes here:
    let total = 0;

    for(let i = 0; i < numberArray.length; i++){
        
        numberArray[ i ] *= i;
        total += numberArray[ i ];
    }
    return total;
}

/*
2. The "people" array contains a list of objects. Each object has "name" and "age" properties. Iterate over "people" and evaluate each object. If "age" is less than 18, add a "status" property with the value of "minor" to that object. If "age" is over 65, add a "status" property of "senior", else add a "status" property of "adult". Return "people".

Answer: This function should return:
[{ name : "Anne",   age : 22, status : "adult"  },
 { name : "Benton", age : 7,  status : "minor"  },
 { name : "Chris",  age : 35, status : "adult"  },
 { name : "Donna",  age : 12, status : "minor"  },
 { name : "Conor",  age : 85, status : "senior" }]

NOTE: The people object has been written compactly to make it easier to read and to occupy fewer lines in the document.
*/

let people = [
    { name : "Anne",   age : 22 },
    { name : "Benton", age : 7  },
    { name : "Chris",  age : 35 },
    { name : "Donna",  age : 12 },
    { name : "Conor",  age : 85 }
];

function checkPeopleStatus(){
    // Your answer goes here:
    for( let i = 0; i < people.length; i++){

        if( people[ i ].age < 18 ){
            people[ i ].status = "minor";
        }
        else if( people[ i ].age > 65 ){
            people[ i ].status = "senior";
        }
        else{
            people[ i ].status = "adult";
        }
    }
    return people;
}


/*
3. Create a string that, when printed to the console, will output a triangle of stars. The triangle should look like this:

*
**
***
****
*****

This configuration of stars can be accomplished with a single string if you include a newline character ("\n") after each row of stars. Newline characters aren't visible, but if they were, the triangle would look like this:

*\n
**\n
***\n
****\n
*****\n

HINT: Maintain a variable to hold the "rows" and another variable to hold the entire "triangle" string. This task can be accomplished without nested loops.

The solution file contains two ways to accomplish this task.

Answer: This function should output the string "*\n**\n***\n****\n*****\n"
*/

function printTriangle(){
    // Your answer goes here:
    let row = "";
    let triangle = "";

    for( let i = 0; i < 5; i++ ){
        row += "*";
        triangle += row + "\n";
    }

    return triangle;
}

// function printTriangle(){
//     // Your answer goes here:
//     let triangle = "";

//     for( let i = 0; i < 5; i++ ){
//         for( let j = 0; j <= i; j++ ){
//             triangle += "*";
//         }
//         triangle += "\n";
//     }

//     return triangle;
// }


/*
4. The "matrix" array contains arrays of letters. "matrix" is an array of arrays. Nested arrays are sometimes referred to as "multi-dimensional" array. To access information from a multi-dimensional array, use bracket notation.

For instance, to access "b", I have to access the first array in "matrix". `matrix[ 0 ]` will return the first array.

Then, I need to access the second element in that array.

`matrix[ 0 ][ 1 ]` will return the string "b"; This notation can be read as "return index 1 of index 0 of matrix".

Complete the function to iterate over the multi-dimensional array and convert the "columns" of characters into "rows" and vice versa. An example of a column is "a", "d", "g". An example of a row is "a", "b", "c". Shifting columns to rows in this way is called "transposition." Complete the function so that it transposes the multi-dimensional array and returns the new array.

HINT: This task is HARD! It requires nested loops and careful management of variables. Don't get overwhelmed if you can't complete it today. Give it your best shot. This task will be a good test of your understanding as you progress in your programming ability.

Answer: This function should return:

[
    [ "a", "d", "g" ],
    [ "b", "e", "h" ],
    [ "c", "f", "i" ]
]
*/

let matrix = [
    [ "a", "b", "c" ],
    [ "d", "e", "f" ],
    [ "g", "h", "i" ]
];

function transpose(){

    let newMatrix = [];

    for( let i = 0; i < 3; i++ ){
        let newRow = [];
        for( let j = 0; j < 3; j++ ){
            newRow.push( matrix[ j ][ i ] );
        }
        newMatrix.push( newRow );
    }
    return newMatrix;
}