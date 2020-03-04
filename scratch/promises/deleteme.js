function binarySearch( sourceArray, searchItem ){

    // Copy the array. Not part of the algorithm, but
    // necessary in JavaScript
    let arrayToSearch = sourceArray.slice( 0 );

    // 5. If the array is empty, we did not find the element. Return `false`.
    // Otherwise, repeat step 1-4 on the remaining elements.
    while( arrayToSearch.length > 0 ){

        // logging the array so you can see how
        // it is being reduced during the search
        console.log( arrayToSearch );

        // 1. Find the middle of the array
        let mid = Math.floor( arrayToSearch.length / 2 );
        //    Get the value of the middle element
        let midValue = arrayToSearch[ mid ];

        // 2. If the current element is equal to the value
        //    we are searching for, then we've found our value, return true;
        if( midValue === searchItem ){
            return true;
        }
        // 3. If the current element is less
        //    than the element we are looking for
        else if( midValue < searchItem ){
            // discard it and all the elements before it
            arrayToSearch.splice( 0, mid + 1 );
        }
        // 4. If the current element is greater than the element
        else{
            // discard it and the elements after it in the array
            arrayToSearch.splice( mid, arrayToSearch.length - mid );
        }
    }
    // Return false if the value isn't found in the array
    return false;
}

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];

console.log( binarySearch( numbers, 10 ) );
