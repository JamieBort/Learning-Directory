// primeNumberArray = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
primeNumberArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// generate primes of 15.
// numberOfInterest = 15;
// numberOfInterest = 16;
numberOfInterest = 18;
// numberOfInterest = 23;

// Want to find all primes factors of f by starting with newArray[0].
var findPrimes = (int) => {
    findPrimesOutput = [int];
    console.log("findPrimesOutput: ", int, "\n=============================");

    // First check to see if numberOfInterest is in primeNumberArray. If it is, we're done.
    if (primeNumberArray.includes(numberOfInterest)) {
        console.log(numberOfInterest, "does exist in the primeNumberArray array. Aside from the number 1 and", numberOfInterest, "there are no other primes"); // If returns true, then it does exist in the primeNumberArray array.
    }

    // Second
    // console.log(primeNumberArray);
    primeNumberArray.forEach(element => {
        // console.log(element);
        // console.log(int);
        // console.log(int % element == 0);
        while (int % element == 0 ) {
            console.log("int is now", int);
            findPrimesOutput.push(element);
            int /= element;
        }
        // console.log("int is now", int);
    });
    console.log("findPrimesOutput is now", findPrimesOutput);

    return findPrimesOutput;
};
findPrimes(numberOfInterest);