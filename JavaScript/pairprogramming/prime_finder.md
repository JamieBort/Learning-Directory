//This method will find all of the prime numbers smaller than the square root of a given number.  This can be useful to help frind the prime factorization of a number.
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

let value = 400;
console.log(primeFinder(value));
