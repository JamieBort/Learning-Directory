function deleteNth(arr, n) {
    let newArray = [];
    let myObject = {};

    // // Push the first element to the object.
    // // Count how many times it's in the object.
    // myObject[arr[i]] = 1;
    // newArray.push(arr[i]);


    for (i = 0; i < arr.length; i++) {

        // Check if the subsequent elements are already in the newArray array.
        if (arr[i] in myObject) {
            // If so, check if the maximum number of occurances has been reached.
            if (myObject[arr[i]] < n) {
                myObject[arr[i]] += 1;
                newArray.push(arr[i]);
            }
        } else {
            // If not, push it to the new array.
            // Count how many times it's in the new array.
            myObject[arr[i]] = 1;
            newArray.push(arr[i]);
        }
    }

    // // Check if the second element matches the previous elements.
    // if (arr[1] in myObject) {
    //     // If so, check if the maximum number of occurances has been reached.
    //     console.log("yes, ", arr[2], "is already in myObject");
    //     if (myObject[arr[1]] < n) {
    //         myObject[arr[1]] += 1;
    //         newArray.push(arr[1]);
    //     }
    // } else {
    //     // If not, push it to the new array.
    //     // Count how many times it's in the new array.
    //     myObject[arr[1]] = 1;
    // }

    console.log(arr, "original array");
    console.log(myObject, "My object");
    console.log(newArray, "my array");
    return newArray;
}
// deleteNth([1, 1, 1, 1], 2);
deleteNth([20, 37, 20, 21], 1)