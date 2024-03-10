/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue(hand) {
  let handTotal = 0;
  // loop through the hand to determine each card value
  // .forEach is a method that loops through data
  hand.forEach(function(hand) {

    if (isNaN(hand) == false ) {
      handTotal += Number(hand);

    } else if (hand === 'A') {
      handTotal += 11;

    } else if (hand === 'K' || 'Q' || 'J') {
      handTotal += 10;
    }
    // isNaN is a function in JavaScript that works like forEach in that it can evaluate the given data and understand what you're asking
    // I had to google that because "hand === '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9'" didn't work for some reason
    // can't use an 'else' at the end because a condition
    // still needs to be set
  });
  // 'Number' is an object (not an object literal)
  // that allows you to turn strings into numbers

  // the '+=' here both assigns and calculates
  //do while loop for handling aces, which can be 1 or 11

  // loop for every ace in our hand

  // handTotal = 22, hand = ['A', 'A']
  hand.forEach(function(hand) {
    if (hand === 'A') {
      if (handTotal > 21) {
        handTotal -= 10;
      }
    }
  });

  console.log(handTotal);
  return handTotal;

  // math is hard y'all but these conditions are necessary
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
