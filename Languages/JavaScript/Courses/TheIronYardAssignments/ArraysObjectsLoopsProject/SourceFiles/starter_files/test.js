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


/*
1. Return the 4th element in the "numbers" array
*/
let fourthNum_test = getFourthNum();
console.log( 01, fourthNum_test === 18, fourthNum_test );

/*
2. Iterate over the "numbers" array. Push any numbers less than 10 onto "smallNums". Return "smallNums".
*/
let smallNums_test = smallNums();
let smallNums_result = [ 1, 4, 9, 7, 3, 5, 6 ];
console.log( 02, arraysMatch( smallNums_test, smallNums_result ), smallNums_test );

/*
3. Add 12, 99, and 101 (in that order) to the end of the "numbers" array. Return the "numbers" array.
*/
let addNums_test = addNums();
let addNums_result = [ 1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 12, 99, 101 ];
console.log( 03, arraysMatch( addNums_test, addNums_result ), addNums_test );

/*
4. Add a property "boxoffice" with a value of 269061 to the "film" object. Return "film".
*/
let boxoffice_test = addBoxOffice() || {};
let boxoffice_test_val = boxoffice_test.boxoffice;
console.log( 04, boxoffice_test_val === 269061, boxoffice_test_val );

/*
5. Add the name "Yukiko Shimazaki" to the "actors" array. Return "film";
*/
let actor_test = addActor() || {};
let actor_arr = actor_test.actors;
let actor_result = [ "Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima", "Yukiko Shimazaki" ];
console.log( 05, arraysMatch( actor_arr, actor_result ), actor_arr );

/*
6. Now that you've added a "boxoffice" propery, subtract "budget" from "property" and return the difference. This number is the amount lost by the studio in making the film. Return the loss.
*/
let losses_test = getLosses();
console.log( 06, losses_test === -1730939, losses_test );

/*
7. Iterate over "letterVals" and "numberVals". Concatenate the values from the two arrays and store the new values in the "vals" array. Return "vals".

Your function should return [ "v5", "x67", "r34", "f456", "p78" ];
*/
let interleave_test = interleave();
let interleave_result = [ "v5", "x67", "r34", "f456", "p78" ];
console.log( 07, arraysMatch( interleave_test, interleave_result ), interleave_test );


/*
8. Iterate over the "first" and "second" arrays. Compare the values for both arrays. If the arrays values are the same, then store that value in the "same" array. Return "same".
*/
let union_test = union();
let union_result = [ "stand", "numinous" ];
console.log( 08, arraysMatch( union_test, union_result ), union_test );