/*
In this project, your task is to complete the unfinished functions. Instructions accompany each function explaining what the function should do and what value it should return. You will implement logic using loops, conditional statements, arrays, and objects to return the values specified in the instructions.

The `test.js` file contains tests for all of the functions in this project. Do not change any code in `test.js`. To see the output from `test.js` and to evaluate your work, open `index.html` in Chrome and view the console in the Developer Tools. You'll know that you are finding success when all of the `console.log` statements print 'true'.
*/


/********************
Use the following array to complete tasks 1-3
*********************/
let numbers = [ 1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6 ];


/*
1. Return the 4th element in the "numbers" array
*/
function getFourthNum(){
    // Your answer here:
    return numbers[3];
}

/*
2. Iterate over the "numbers" array. Push any numbers less than 10 onto "smallNums". Return "smallNums".
*/
function smallNums(){
    let smallNums = [];
    // Your answer here:
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] < 10) {
        smallNums.push(numbers[i])
      }
    }
    return smallNums;
}

/*
3. Add 12, 99, and 101 (in that order) to the end of the "numbers" array. Return the "numbers" array.
*/
function addNums(){
    // Your answer here:
    numbers.push(12);
    numbers.push(99);
    numbers.push(101);
    return numbers;
}


/********************
Use the following object to complete tasks 4-6
*********************/

let film = {
    title : "Seven Samurai",
    director : "Akira Kurosawa",
    released : 1956,
    runtime : 207,
    budget : 2000000,
    actors : [ "Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima" ],
};


/*
4. Add a property "boxoffice" with a value of 269061 to the "film" object. Return "film".
*/
function addBoxOffice(){
    // Your answer here:
    film.boxoffice = 269061;
    return film;
}

/*
5. Add the name "Yukiko Shimazaki" to the "actors" array. Return "film";
*/
function addActor(){
    // Your answer here:
    film.actors.push("Yukiko Shimazaki");
    // film.actors.push('Yukiko Shimazaki');
    return film;
}


/*
6. Now that you've added a "boxoffice" property, subtract "budget" from "property" and return the difference. This number is the amount lost by the studio in making the film. Return the loss.
*/
function getLosses(){
    // Your answer here:
    return film.boxoffice-film.budget;
}


/*
7. Iterate over "letterVals" and "numberVals". Concatenate the values from the two arrays and store the new values in the "vals" array. Return "vals".

Your function should return [ "v5", "x67", "r34", "f456", "p78" ];
*/

let numberVals = [ 5, 67, 34, 456, 78 ];
let letterVals = [ "v", "x", "r", "f", "p" ];

function interleave(){
    let vals = [];
    // Your answer here:
    for (var i = 0; i < numberVals.length; i++) {
      vals[i] = letterVals[i] + numberVals[i];
    }
    return vals;
}


/*
8. Iterate over the "first" and "second" arrays. Compare the values for both arrays. If the arrays values are the same, then store that value in the "same" array. Return "same".
*/

let first = [ "blink", "stand", "glasses", "chair", "numinous", "adjacent", "bracelet", "hand" ];
let second = [ "think", "stand", "cheese", "break", "numinous", "mouse", "close", "toe" ];

function union(){
    let same = [];
    // Your answer here:
    for (var i = 0; i < first.length; i++) {
      if (first[i] === second[i]) {
        same.push(first[i]);
      }
      first[i]
    }

    return same;
}
