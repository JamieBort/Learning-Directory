/*
    Utility function for testing simple arrays and objects.
    very naive implementations, unsafe for production
*/
function arraysMatch( array1, array2 ){
    if( !Array.isArray( array1 ) || !Array.isArray( array2 ) ){ return false; }
    if( !array1 || !array2 ){ return false; }
    if( array1.length != array2.length ){ return false; }

    return true;
}
function props( obj ){
    return Object.getOwnPropertyNames( obj );
}
function objectsMatch( a, b ){
    if( !a || !b ){ return false; }
    let aP = props( a ),
        bP = props( b ),
        aL = aP.length;

    if( aL != bP.length ){
        return false;
    }
    for( let i = 0; i < aL; i++) {
        if( a[ aP[ i ] ] !== b[ aP[ i ] ] ){ return false; }
    }
    return true;
}


/*
1. Iterate over `numberArray` and multiply each number by the iterator `i`. Then, add all of the values in `numberArray` together to produce a single large number. Return the large number.

HINT: You will need to initialize a variable to store the total number and to return the final value.

Answer: This function should return the number 18406.
*/
let bigNumber = getBigNumber();
console.log( 01, bigNumber === 18406, bigNumber );


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
let peopleStatus_test = checkPeopleStatus();
let peopleStatus_result = [
    { name : "Anne",   age : 22, status : "adult"  },
    { name : "Benton", age : 7,  status : "minor"  },
    { name : "Chris",  age : 35, status : "adult"  },
    { name : "Donna",  age : 12, status : "minor"  },
    { name : "Conor",  age : 85, status : "senior" }
];

console.log( 02, (function( pt, pr ){
    if( !arraysMatch( pt, pr ) ){ return false; }

    for( let i = 0; i < pr.length; i++ ){
        if( !objectsMatch( pt[ i ], pr[ i ] ) ){
            return false;
        }
    }
    return true;
})( peopleStatus_test, peopleStatus_result ), peopleStatus_test );


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
let triangle_test = printTriangle();
let triangle_result = "*\n**\n***\n****\n*****\n";
console.log( 03, triangle_test === triangle_result );
console.log( triangle_test );

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
4. The "matrix" array contains arrays of numbers. "matrix" is an array of arrays. Nested arrays are sometimes referred to as "multi-dimensional" array. To access information from a multi-dimensional array, use bracket notation.

For instance, to access "b", I have to access the first array in "matrix". `matrix[ 0 ]` will return the first array.

Then, I need to access the second element in that array.

`matrix[ 0 ][ 1 ]` will return the string "b"; This notation can be read as "return index 1 of index 0 of matrix".

Complete the function to iterate over the multi-dimensional array and convert the "columns" of characters into "rows" and vice versa. An example of a column is "a", "d", "g". An example of a row is "a", "b", "c". Shifting columns to rows in this way is called "transposition." Complete the function, so that it transposes the multi-dimensional array and return the new array.

HINT: This task is HARD! It requires nested loops and careful management of variables. Don't get overwhelmed, if you can't complete it today. Give it your best shot. This task will be a good test of your understanding as you progress in your programming ability.

Answer: This function should return:

[
    [ "a", "d", "g" ],
    [ "b", "e", "h" ],
    [ "c", "f", "i" ]
]
*/

let transpose_test = transpose();
let transpose_result = [
    [ "a", "d", "g" ],
    [ "b", "e", "h" ],
    [ "c", "f", "i" ]
];

console.log( 04, (function( tt, tr ){
    if( !arraysMatch( tt, tr ) ){
        return false;
    }
    for( let i = 0; i < tt.length; i++ ){
        if( !arraysMatch( tt[ i ], tr[ i ] ) ){ return false; }
    }
    return true;
})( transpose_test, transpose_result ), transpose_test );








