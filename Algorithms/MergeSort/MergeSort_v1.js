// The algorithm (psuedo code):


// 2. fuction to sort the array.
// Takes two arguments, the two arrays generated in the divide function above.

// Joins them again.

// let givenArray = [3,5,1,-2,17,20];
let givenArray = [3,5,1,-2];

arraySplitter(givenArray);

// 1. fuction to divide the array.
// Takes in an array as an argument.
function arraySplitter(array){
    let middle = array.length/2;
    // Divides the array into two arrays of equal length +/- one element.
    if(array.length<=1){return array}
    else{
        // Calls the sorting function on each array half. 
        let left = array.slice(0,middle);
        let right = array.slice(middle);
        array=sortingFunction(left,right);
        console.log("left", left);
        console.log("right", right);
        return array;
    }
}

function sortingFunction(left,right){
    let tempArray=[];
    let leftIndex=0;
    let rightIndex=0;
    // if(twoElementArray[0]<twoElementArray[1]){return twoElementArray;}
    while(leftIndex<left.length && rightIndex<right.length){
        // console.log("while loop");
        if(left[leftIndex]<right[rightIndex]){
            console.log("left", left);
            tempArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            console.log("right", right);
            tempArray.push(right[rightIndex]);
            rightIndex++;
        }
        console.log("tempArray:", tempArray);
    }
    // console.log("tempArray:", tempArray);
}