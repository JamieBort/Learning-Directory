const fs = require('fs');

// read the fortunes text file and split it into an array based on newline characters
const fortunes = fs.readFileSync('fortunes.txt', 'utf8').split('\n');

/**
 * Gets a random fortune from the set of fortunes
 * @return {[type]} [description]
 */
function getRandomFortune() {
  // pick a random index in the fortunes array
  const index = Math.floor(Math.random() * fortunes.length);

  // return the fortune
  return fortunes[index];
}

/**
 * gets an array of lucky numbers
 * @param  {[type]} num the number of lucky numbers to get. defaults to 5
 * @param  {[type]} max the maximum value for the lucky numbers. defaults to 99
 * @return {[type]} an array of lucky numbers
 */
function getLuckyNumbers(num, max) {
  // the number of lucky numbers to get.
  num = num || 5;
  // the maximum value for the lucky numbers
  max = max || 99;

  // an array to hold the lucky numbers
  let numbers = [];

  // generate the lucky numbers and put them in the array
  for (let x = 0; x < num; x++) {
    numbers.push(Math.floor(Math.random() * max));
  }

  // return the lucky numbers
  return numbers;
}

module.exports.getRandomFortune = getRandomFortune;
module.exports.getLuckyNumbers = getLuckyNumbers;
