primeNumberArray = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// console.log(primeNumberArray.length);

// generate primes of 15.
numberOfInterest = 15;
// numberOfInterest = 23;

// Find greatest integer in primeNumberArray that is less than 15.
// We don't care about this any more.
var findHighPrime = (aNumber) => {
    greatestPrime = 0;
    t = 0;
    while (primeNumberArray[t] < aNumber) {
        // console.log(primeNumberArray[t]);
        greatestPrime = primeNumberArray[t];
        t++;
    }
    greatestPrimeArray = [aNumber, greatestPrime];
    console.log("The numberOfInterest is: ", greatestPrimeArray[0], "\nThe greatestPrime is: ", greatestPrimeArray[1], "\n=============================");
    return greatestPrimeArray;
};
// findHighPrime(numberOfInterest);

// Want to find all primes factors of f by starting with newArray[0].
var findPrimes = (int) => {
    aaa = numberOfInterest;
    console.log("findPrimesOutput: ", int, "\n=============================");
    console.log(aaa%primeNumberArray[1]);
    console.log(aaa%primeNumberArray[2]);
    console.log(primeNumberArray[2]); // primeNumberArray[2] = 3
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

var check = (input) => {
    console.log("Checking input:", input);
    console.log(primeNumberArray.includes(input[0] % input[1]));
    if (primeNumberArray.includes(input[0] % input[1]) == true) {
        console.log(input[0] % input[1], "is in the array");
        // temp = aNumber;
        talley = 0;
        while (input[0] - 13 > 0) {
            input[0] -= 13;
            talley++;
        }
        // a = talley;
        console.log("talley: ", talley);
        // console.log("a: ", a);
        // console.log("temp: ", temp);
        checkOutput = [input[0], input[1], talley];
    }
    console.log("The checkOutput: ", checkOutput, "\n=============================");
    return checkOutput;
}
// check(findPrimesOutput);