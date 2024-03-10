var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    // Create an array.
    // Push the first character into that Array.
    // If the subsequent 

    let array = [];

    if (iterable === "") {

    } else {
        for (let i = 1; i < iterable.length + 1; i++) {
            // console.log(iterable[i])
            if (iterable[i] != iterable[i - 1]) {
                array.push(iterable[i - 1])
            }
        }
        
    }
    console.log(array);
        return array;
}


uniqueInOrder('AAAABBBCCDAABBB')
//   , ['A','B','C','D','A','B']