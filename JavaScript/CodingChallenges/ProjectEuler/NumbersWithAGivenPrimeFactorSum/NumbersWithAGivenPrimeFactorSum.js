primeNumberArray = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// console.log(primeNumberArray.length);

// generate primes of 15.
numberOfInterest = 15;
// numberOfInterest = 23;

// Want to find all primes factors of f by starting with newArray[0].
var findPrimes = (int) => {
    aaa = numberOfInterest;
    console.log("findPrimesOutput: ", int, "\n=============================");

    primeNumberArray.forEach(element => {
        if (aaa % primeNumberArray[element] == 0) {
            console.log("the first prime is: ", primeNumberArray[element]);
            console.log("it is divided", aaa/primeNumberArray[element], "times");
            thisArray = [primeNumberArray[element],aaa/primeNumberArray[element]];
            return thisArray;
        }
    });

    // console.log(aaa%primeNumberArray[1]);
    // if(aaa%primeNumberArray[2]==0){console.log("yes");}
    // console.log(aaa%primeNumberArray[2]);
    // console.log(primeNumberArray[2]); // primeNumberArray[2] = 3

    // console.log(aaa%primeNumberArray[6]);
    // console.log(aaa%primeNumberArray[5]);
    // console.log(aaa%primeNumberArray[4]);
    // console.log(aaa%primeNumberArray[3]);
    // if(aaa%primeNumberArray[3]]==0){console.log("abc")}
    findPrimesOutput = int;
    return findPrimesOutput;
};
// findPrimes(greatestPrimeArray);
findPrimes(15);