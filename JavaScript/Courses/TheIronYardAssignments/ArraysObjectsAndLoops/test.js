/*
    Utility functions for testing simple arrays and objects.
    very naive implementations, unsafe for production
*/
function cloneArray( arr ){
    return arr.slice( 0 );
}
function join( arr ){
    return cloneArray( arr ).sort().join( ',' );
}
function arraysMatch( array1, array2 ){
    if( !array1 || !array2 ){ return false; }
    return join( array1 ) === join( array2 );
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
0. Return the "name" property value of the "pet" object.

Answer: This function should return the string "Clive"
*/
console.log( 00, getPetName() === "Clive", getPetName() );


/*
1. Return the concatenated "firstname" and "lastname" values of the "human" object.

Answer: This function should return the string "Betty Ford"
*/
console.log( 01, getHumanName() === "Betty Ford", getHumanName() );


/*
2. Return the 3rd element of the "terrain" array

Answer: This function should return the string "hill"
*/
console.log( 02, getTerrain() === "hill", getTerrain() );


/*
3. Return the 2nd element of the "hobbies" property of the "child" object 

Answer: This function should return the string "running"
*/
console.log( 03, getChildHobby() === "running", getChildHobby() );


/*
4. Iterate over the "nums" array and multiply each number by 3. Return the altered array.

HINT: You will need to "loop" over the array

Answer: This function should return [702, 18, 7128, 2658, 702, 1371, 234]
*/
let nums_test = [ 702, 18, 7128, 2658, 702, 1371, 234 ];
let nums_result = getDoubledArray();
console.log( 04, arraysMatch( nums_result, nums_test ), nums_result );


/*
5. Iterate over the "characters" array and concatenate each element onto the "gibberish" variable. After building the string, return "gibberish"

HINT: You will need to "loop" over the array

Answer: This function should return "k?4Fd9$al;Y1!"
*/
console.log( 05, getGibberish() === "k?4Fd9$al;Y1!", getGibberish() );


/*
6. Add a new "health" property with a value of "9 hearts" to the "hero" object and return "hero"

Answer: This function should return { name: "Link", health: "9 hearts", weapon : "Sword" }
*/
let hero_test = { name: "Link", health: "9 hearts", weapon : "Sword" };
let hero_result = addHealthToHero();
console.log( 06, objectsMatch( hero_test, hero_result ), hero_result );


/*
7. Iterate over the "bigNums" array. If any number is less than 10, replace it with "x". Return "bigNums"

HINT: This will need to "loop" over the array and check "if" the numbers are "less than" 10

Answer: This function should return ["x", 12, "x", 56, 19, "x", "x", "x", 14, 10, "x"]
*/
let bignums_test = ["x", 12, "x", 56, 19, "x", "x", "x", 14, 10, "x"];
let bignums_result = nixLittleNums();
console.log( 07, arraysMatch( bignums_test, bignums_result ), bignums_result );


/*
8. This example includes the "randomWord" function. "randomWord" will select a random element from the "words" array and return that element. Use "randomWord" to build a new array "lotsOfWords" with 100 elements from "words".  Return "lotsOfWords".

HINT: You'll need to call the same function 100 times. "words" is a small array, so "lotsOfWords" will have many duplicated words.

Answer: Since "randomWord" returns a word at random, this document cannot provide an exact result. However, lotsOfWords.length should be 100
*/
let bigWordList = getBigWordList();
let bigWordListLength = Array.isArray( bigWordList ) ? bigWordList.length : -1;
console.log( 08, bigWordListLength === 100, bigWordList );


/*
9. Within the function, create a new variable "finalChoice" and initialize it with an empty array. Then, iterate over the "option1" and "option2" arrays using a single loop. Within the loop, compare the values of each array at each index. Push the larger of the two numbers onto the "finalChoice" array. Return "finalChoice".

HINT: You'll need to "loop" over these arrays. "If" the number in option1 is larger, push it onto finalChoice, "else" push the number in option2 onto finalChoice.

Answer: This should return [76, 586, 12, 934, 76, 345, 6789, 123, 675, 43654]
*/
let final_test = [76, 586, 12, 934, 76, 345, 6789, 123, 675, 43654];
let final_result = getFinalChoice();
console.log( 09, objectsMatch( final_test, final_result ), final_result );