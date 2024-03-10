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
function precise( arr ){

    let arr2 = [];

    for( let i = 0; i < arr.length; i++ ){
        arr2.push( arr[ i ].toPrecision( 3 ) );
    }

    return arr2;
}
function arraysMatch( array1, array2 ){
    if( !array1 || !array2 ){ return false; }
    return join( array1 ) === join( array2 );
}
function nestedArraysMatch( array1, array2 ){

    let match = true;

    if( !array1 || !array2 ){ return false; }
    if( array1.length != array2.length ){ return false; }

    for( let i = 0; i < array1.length; i++ ){

        if( !arraysMatch( array1, array2 ) ){
            match = false;
            break;
        }
    }
    return match;
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




/*** 1 ***/
let singles_result = [
    [ 'a', 'a' ], [ 'a', 'b' ], [ 'a', 'c' ], [ 'a', 'd' ],
    [ 'b', 'a' ], [ 'b', 'b' ], [ 'b', 'c' ], [ 'b', 'd' ],
    [ 'c', 'a' ], [ 'c', 'b' ], [ 'c', 'c' ], [ 'c', 'd' ],
    [ 'd', 'a' ], [ 'd', 'b' ], [ 'd', 'c' ], [ 'd', 'd' ]
];

console.log( 01, nestedArraysMatch( arrayCombos(), singles_result ), arrayCombos() );



/*** 2 ***/
let rush_result_1 = navigateRushHour( 500 )  === "The time of day is 500, I'm going through the city.",
    rush_result_2 = navigateRushHour( 800 )  === "The time of day is 800, I'm going around the city.",
    rush_result_3 = navigateRushHour( 1700 ) === "The time of day is 1700, I'm going around the city.",
    rush_result_4 = navigateRushHour( 2000 ) === "The time of day is 2000, I'm going through the city.";

console.log( 02, rush_result_1, "navigateRushHour( 500 )", navigateRushHour( 500 ) );
console.log( 02, rush_result_2, "navigateRushHour( 800 )", navigateRushHour( 800 ) );
console.log( 02, rush_result_3, "navigateRushHour( 1700 )", navigateRushHour( 1700 ) );
console.log( 02, rush_result_4, "navigateRushHour( 2000 )", navigateRushHour( 2000 ) );



/*** 3 ***/
let f2 = factorial( 2 ) === 2,
    f4 = factorial( 4 ) === 24,
    f6 = factorial( 6 ) === 720;

console.log( 03, f2, "factorial( 2 )", factorial( 2 ) );
console.log( 03, f4, "factorial( 4 )", factorial( 4 ) );
console.log( 03, f6, "factorial( 6 )", factorial( 6 ) );


/*** 4 ***/
let interp_result = precise( [ 1, 1.25, 1.5, 1.75, 2 ] );
let interp        = precise( interpolate( 1, 2, 4 ) || [] );

console.log( 04, arraysMatch( interp_result, interp ), "interpolate( 1, 2, 4 )", interp );
