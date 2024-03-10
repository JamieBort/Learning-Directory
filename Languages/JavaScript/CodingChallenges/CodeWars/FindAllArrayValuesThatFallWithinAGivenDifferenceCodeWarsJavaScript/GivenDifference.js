function withIn(array, num) {


    // want to itterate through and count down
    for (let i = array.length - 1; i > 0; i--) {
        console.log("i", i);
        for (let j = array.length - 1; j > 0; j--) {
            console.log("j", j);
            var minArray = [];
            if (Math.abs(array[array.length - 1] - array[i]) < num) {
                console.log("The numbers are close. The difference is ", Math.abs(array[array.length - 1] - array[i]));
                // minArray.push(array[i]);
                // array.pop(i);
            } else {
                console.log("the numbers are NOT close! The difference is ", Math.abs(array[array.length - 1] - array[i]));
            }
        }
    }
    // const minArray = [];
    // if (Math.abs(array[8] - array[7]) < num) {
    //     console.log("the numbers are close. The difference is ", Math.abs(array[0] - array[1]));
    //     minArray.push(array[0]);
    //     minArray.push(array[1]);
    // } else {
    //     console.log("the numbers are NOT close! The difference is ", Math.abs(array[0] - array[1]));
    // }



    console.log(minArray);
    return minArray;
}

withIn([1, 31, 30], 2);

// withIn([5, 32, 5, 1, 31, 70, 30, 8], 2);

// We need to find the difference between all the number that are less than 3.


// Given [5, 32, 5, 1, 31, 70, 30, 8], 
// and you want to know all the values that fall within a difference of 2 of each other:
// Should return [5,5,30,31,32]