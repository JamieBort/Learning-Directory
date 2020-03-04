// from: Josh - coppied and pasted.
// Given a positive number n > 1
// find the prime factor decomposition of n. The result will be a string with the following form :
// "(p1**n1)(p2**n2)...(pk**nk)" with the p(i) in increasing order and n(i) empty if n(i) is 1.
// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"


// n = tk+p

// Array of all prime numbers less than 200.
var array200 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

var number = 86240;

const primeFinder = function(num) {
  let primes = [2];
  //Iterate through all numbers smaller than the square root of the parameter number
  for (let i = 3; i <= Math.sqrt(num); i++) {
    //Iterate through the primes array
    let isPrime = true;
    for (let j = 0; j < primes.length; j++) {
      //Check to see if i is divisible by any number in the array
      if (i % primes[j] == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primes.push(i)
    }
    //If it is not divisible by any of the numbers, push it into the array
  }
  return primes;
}

function primeFactors(num) {
    var factors = {
    };


    // Iterate through array.
    for (i = 0; i < array200.length; i++) {
        var j = 1;
        if (num % array200[i] == 0) {
          // console.log("the nubmer is divisible by " + array200[i]);
          //If the factors object doesn't have a key for the factor, make one
          if (!factors[array200[i]]) {
            factors[array200[i]] = 0;
          }
          //Iterate the key's value if it is divisible.
            factors[array200[i]] += 1;
            num /= array200[i]; // divide by i
            i--; // check again


            // j++;
        }
    }
    //'(2**5)(5)(7**2)(11)' is a sample of what we should return
    let string = ''
    for (key in factors) {
      if (factors[key] > 1) {
        string += '(' + key + '**' + factors[key] + ')'
      } else {
        string += '(' + key + ')'
      }
    }
    return string;
    return factors;
}
console.log(primeFactors(number));
