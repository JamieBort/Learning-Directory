/*
In this activity, your task is to complete the unfinished functions. Instructions accompany each function explaining what the function should do and what value it should return. You will implement logic using loops, conditional statements, arrays, and objects to return the values specified in the instructions.

The `test.js` file contains tests for all of the functions in this activity. Do not change any code in `test.js`. To see the output from `test.js` and to evaluate your work, open `index.html` in Chrome and view the console in the Developer Tools. You'll know that you are finding success when all of the `console.log` statements print 'true'.

***************************
To demonstrate what is required in this activity, task 0 is spelled out and completed.
***************************
*/


/*
0. Return the "name" property value of the "pet" object.

Answer: This function should return the string "Clive"
*/

let pet = {
    name : "Clive"
};

function getPetName(){
    // Answer goes here:
    return pet.name;
}

/*
1. Return the concatenated "firstname" and "lastname" values of the "human" object.

HINT: Put a space `" "` between the two names

Answer: This function should return the string "Betty Ford"
*/

let human = {
    firstname : "Betty",
    lastname : "Ford"
};

function getHumanName(){
    // Answer goes here:

}

/*
2. Return the 3rd element of the "terrain" array

Answer: This function should return the string "hill"
*/

let terrain = [ "plain", "mountain", "hill", "beach", "valley" ];

function getTerrain(){
    // Answer goes here:

}

/*
3. Return the 2nd element of the "hobbies" property of the "child" object 

Answer: This function should return the string "running"
*/

let child = {
    name : "Sam",
    hobbies : [ "swimming", "running", "swinging" ]
};

function getChildHobby(){
    // Answer goes here:

}

/*
4. Iterate over the "nums" array and multiply each number by 3. Return the altered array.

HINT: You will need to "loop" over the array

Answer: This function should return [702, 18, 7128, 2658, 702, 1371, 234]
*/

let nums = [ 234, 6, 2376, 886, 234, 457, 78 ];

function getDoubledArray(){
    // Answer goes here:

}

/*
5. Iterate over the "characters" array and concatenate each element onto the "gibberish" variable. After building the string, return "gibberish"

HINT: You will need to "loop" over the array

Answer: This function should return "k?4Fd9$al;Y1!"
*/

let characters = [ "k", "?", "4", "Fd", "9", "$", "a", "l", ";", "Y", "1", "!"];

function getGibberish(){
    let gibberish = "";
    // Answer goes here:

}

/*
6. Add a new "health" property with a value of "9 hearts" to the "hero" object and return "hero"

Answer: This function should return { name: "Link", health: "9 hearts", weapon : "Sword" }
*/

let hero = {
    name: "Link",
    weapon : "Sword"
};

function addHealthToHero(){
    // Answer goes here:

}

/*
7. Iterate over the "bigNums" array. If any number is less than 10, replace it with "x". Return "bigNums"

HINT: You will need to "loop" over the array and check "if" the numbers are "less than" 10

Answer: This function should return ["x", 12, "x", 56, 19, "x", "x", "x", 14, 10, "x"]
*/

let bigNums = [ 3, 12, 7, 56, 19, 9, 1, 5, 14, 10, 2 ];

function nixLittleNums(){
    // Answer goes here:

}

/*
8. This example includes the "randomWord" function. "randomWord" will select a random element from the "words" array and return that element. Use "randomWord" to build a new array "lotsOfWords" with 100 elements from "words".  Return "lotsOfWords".

HINT: You'll need to call the same function 100 times. "words" is a small array, so "lotsOfWords" will have many duplicated words.

Answer: Since "randomWord" returns a word at random, this document cannot provide an exact result. However, `lotsOfWords.length` should be 100
*/

function randomWord(){
    let words = [ "puzzling", "thirsty", "sound", "shade", "moon" ];
    return words[ Math.floor( Math.random() * 5 ) ];
}

function getBigWordList(){
    let lotsOfWords = [];
    // Answer goes here:

}

/*
9. Within the function, create a new variable "finalChoice" and initialize it with an empty array. Then, iterate over the "option1" and "option2" arrays using a single loop. Within the loop, compare the values of each array at each index. Push the larger of the two numbers onto the "finalChoice" array. Return "finalChoice".

HINT: You'll need to "loop" over these arrays. "If" the number in option1 is larger, push it onto finalChoice, "else" push the number in option2 onto finalChoice.

Answer: This should return [76, 586, 12, 934, 76, 345, 6789, 123, 675, 43654]
*/

let option1 = [ 45, 586, 12, 365, 76, 23, 86, 19, 8, 43654 ];
let option2 = [ 76, 364, 4, 934, 6, 345, 6789, 123, 675, 12 ];

function getFinalChoice(){
    // Answer goes here:
    
}