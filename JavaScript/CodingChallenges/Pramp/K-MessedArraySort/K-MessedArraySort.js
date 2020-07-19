
//  To runt his code, in terminal in this directory run "nodemon IntegerToRoman.js"

// input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// possible outcomes for arr[0]
// [1, 1, 1, x, x, x, x, x, x, x]

// possible outcomes for arr[1]
// [4, 4, 4, 4, x, x, x, x, x, x]

// possible outcomes for arr[2]
// [5, 5, 5, 5, 5, x, x, x, x, x]

// possible outcomes for arr[3]
// [x, 2, 2, 2, 2, 2, x, x, x, x]

// Looking at these options we now have to sort the solely the first element.
// Our choices are 1, 4, and 5. 
// 1 will be selected.

arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
k = 2;

// Generate an array of arrays.
function GenerateArrayOfArrays(arr){
    arrayOfArrays=[];
    // for(i=0; i<arr.length; i++){
        // i=0;
        // if(i<k){

        // }
    //     console.log(i);
    // }

    // i = 0
    tempArray=[];
    tempArray.push(arr[0]);
    tempArray.push(arr[0]);
    tempArray.push(arr[0]);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    arrayOfArrays.push(tempArray);
    
    // i = 1
    tempArray=[];
    tempArray.push(arr[1]);
    tempArray.push(arr[1]);
    tempArray.push(arr[1]);
    tempArray.push(arr[1]);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    arrayOfArrays.push(tempArray);

    // i = 2
    tempArray=[];
    tempArray.push(arr[2]);
    tempArray.push(arr[2]);
    tempArray.push(arr[2]);
    tempArray.push(arr[2]);
    tempArray.push(arr[2]);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    arrayOfArrays.push(tempArray);

    // i = 3
    tempArray=[];
    tempArray.push(NaN);
    tempArray.push(arr[3]);
    tempArray.push(arr[3]);
    tempArray.push(arr[3]);
    tempArray.push(arr[3]);
    tempArray.push(arr[3]);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    tempArray.push(NaN);
    arrayOfArrays.push(tempArray);

    console.log(arrayOfArrays);

    // Now compare the first element of each inner array and sort it.
    console.log(arrayOfArrays[0][0]);
    console.log(arrayOfArrays[1][0]);
    console.log(arrayOfArrays[2][0]);
    console.log(arrayOfArrays[3][0]);

    newArray = [];
    if(arrayOfArrays[0][0] < arrayOfArrays[1][0] && arrayOfArrays[0][0] < arrayOfArrays[2][0]){
        newArray.push(arrayOfArrays[0][0]);
        console.log("yes");
    }
    console.log(newArray);
}
GenerateArrayOfArrays(arr);