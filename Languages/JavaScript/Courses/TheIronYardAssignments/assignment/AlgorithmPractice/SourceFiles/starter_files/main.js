/*********************
INSTRUCTIONS

This activity contains four coding challenges designed to give you practice authoring algorithms.
Take your time and read the instructions carefully. Fill in the functions or code the algorithms.
All of the challenges are tested in `test.js`. Do not alter the code in `test.js`.
Read the instructions to determine how to assess your code.
***********************/


/*** 1 ***/
/*******************
INSTRUCTIONS:
Create an function that uses the letters
in the `singles` array to populate the
`combos` array with every possible combination
of TWO letters.

The combinations should be stored in arrays.
Implement this algorithm as the
function `arrayCombos`. This function should return a
multidimensional array.

HINT: This problem can be solved with one array or nested arrays

NOTE:
- The `combos` array should have 16 items after
populated by your algorithm
- Do not change the `singles` array

ANSWER: This function should return:
[
    [ 'a', 'a' ], [ 'a', 'b' ], [ 'a', 'c' ], [ 'a', 'd' ],
    [ 'b', 'a' ], [ 'b', 'b' ], [ 'b', 'c' ], [ 'b', 'd' ],
    [ 'c', 'a' ], [ 'c', 'b' ], [ 'c', 'c' ], [ 'c', 'd' ],
    [ 'd', 'a' ], [ 'd', 'b' ], [ 'd', 'c' ], [ 'd', 'd' ]
]

***********************/

let singles = [ "a", "b", "c", "d" ];

function arrayCombos(){
    // YOUR CODE HERE
}


/*** 2 ***/
/*******************
INSTRUCTIONS:
Read through the word problem and write an
algorithm that satisfies the scenario.

WORD PROBLEM:
You are going on a road trip, and you will pass
through several large cities on the way to your
final destination. You decide to write a little
script to help you decide which route you will take
to go through each city.

The function should do two things:

1. Help you decide to go straight through the city during
   low traffic times or around the city during rush hour
2. The function should return a message telling
   you which direction to go

You decide that morning rush hour is
between 6 am and 9 am and that evening
rush hour is between 4 pm and 6 pm.

To simplify your calculations you use military time
(its easier than trying to evaluate `6 am` or `6:00`):
6am = 600
9am = 900
4pm = 1600
6pm = 1800

You have one variable `timeOfDay` that holds the
current time (in military time) which is 500 (5 am).
The function `navigateRushHour` should return a string telling
you which way to go, either through the city or around.

ANSWER:
if it is rush hour, the function should return
"The time of day is " + timeOfDay + ", I'm going around the city."
if it is not rush hour, the function should return
"The time of day is " + timeOfDay + ", I'm going through the city.";

***********************/

let timeOfDay = 500;

function navigateRushHour( timeOfDay ){
    // YOUR CODE HERE
}




/*** 3 ***/
/******************
INSTRUCTIONS:
Author a function that implements a factorial calculation.

NOTES:
Factorials are a mathematical representation of
the product of a finite series of integers
starting with 1. Factorials are written as `4!`,
that is to say, a number and an exclamation point.

The concept is pretty simple:
A factorial of a number is the product of all the
integers from 1 to that number. `4!` is the product
of 1, 2, 3, and 4 (which equal 24)

Here are some examples:
2! = 1 * 2 = 2
4! = 1 * 2 * 3 * 4 = 24
6! = 1 * 2 * 3 * 4 * 5 * 6 = 720

ANSWER:
The factorial function should return the factorial value.
e.g. factorial( 6 ) should return the number 720
**********************/

var num = 6;

let factorial = function( num ){
    // YOUR CODE HERE
};





/*** 4 ***/
/*******************
INSTRUCTIONS:
Author a function that interpolates
between two numbers.

NOTES:
Interpolation is a fancy word for subdividing
the space between two numbers. For instance, say we
have the numbers 1 and 2. We want to interpolate
between those two numbers four times, which is to say
that we want to divide the space
between those numbers into four equal parts.

Interpolating between 1 and 2 (four times) would give us:

1, 1.25, 1.5, 1.75, and 2

The interval between each
number is equal. The interval between
1 and 1.25 is 0.25, the interval between
1.25 and 1.5 is 0.25, etc.

The interpolate function takes three parameters:
* `start` is the smaller of the two
numbers being interpolated
(in the above example: 1).
* `end` is the larger of the two numbers
being interpolated (in the above example: 2).
* `count` is the number of interpolations
(in the above example 4)

The interpolate function should
return an array containing
the interpolated values.

HINT: Calculate the interval between each
    interpolated value first. (in the above example: 0.25 )

ANSWER:
e.g. interpolate( 1, 2, 4 ) should
return the array [ 1, 1.25, 1.5, 1.75, 2 ]
***********************/

let interpolate = function( start, end, count ){
    // YOUR CODE HERE
}