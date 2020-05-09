//Let Plr1 be the first player.
//Let Plr2 be the second player.
//Let Plr3 be the third player.

//Generate a random outcome for each player.

// If paper plays rock then paper wins.
// If paper plays scissors then scissors wins.
// If scissors plays rock then rock wins.
// If paper plays paper then it is a tie.
// If rock plays rock then it is a tie.
// If scissors plays scissors then it is a tie.

//declaring the variables

let plr1;
let plr2;
let plr3;

//generate random numbers

Math.random();



if (1) {
    console.log("One player player had Paper, the other player had rock. And player won.");
}
if (2) {
  console.log("One player had rock, the other player had scissors. And rock won.");
}
if (3) {
  console.log("One player had scissors, the other player had paper. And paper won.");
}
if (4) {
  console.log("One player had scissors, the other player had scissors. So it was a tie.");
}
if (5) {
  console.log("One player had rock, the other player had rock. So it was a tie.");
}
if (6) {
  console.log("One player had paper, the other player had paper. So it was a tie.");
}

// This produces a random integer between 1 and 9 inclusive

let num = Math.floor((Math.random() * 9) + 1);
console.log(Math.floor((Math.random() * 9) + 1));

if (num == even) {
  console.log('the number is even');

} console.log("the number is odd");
//
// if (paper plays scissors) {
//         console.log("Scissors wins");
// }
//
// if (scissors plays rock) {
//           console.log("Rock wins");
// }
//
// if (scissors plays scissors) {
//   console.log("You need to play again");
// }
