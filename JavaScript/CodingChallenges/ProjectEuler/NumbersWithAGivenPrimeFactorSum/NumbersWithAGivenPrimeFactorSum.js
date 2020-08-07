primeNumberArray = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// console.log(primeNumberArray.length);

// generate primes of 15.
f = 15;

// find greatest integer in primeNumberArray that is less than 15.
var find = (f) => {
    
    newArray = [];
    t = 0;
    while (primeNumberArray[t] < f) {
        // console.log(primeNumberArray[t]);
        newArray[0] = primeNumberArray[t];
        t++;
    }
    console.log(newArray);
    return newArray;
};
find(f);

// want to find all primes factors of f by starting with newArray[0].
var test = (array,f) => {
    // console.log(array[0]% f==13);
    // console.log(15%13);
    // console.log(15%11);
    // console.log(15%7);
    // console.log(15%5);
    // console.log(15%3);
    // console.log(15%2);

    if(f%5==0){
        console.log(f%5);
        console.log(f);
        f-=5;
        console.log(f);
        f-=5;
        console.log(f);
    }
    // if(array[0]% f==15){console.log("true")}
};
test(newArray,f);