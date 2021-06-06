// Rock Paper Scissors Function
function rps (a,b) {
  // write code here
  if (a === 'rock' && b === 'paper') {
    return "Paper wins!"
  }

  if (a === 'scissors' && b === 'paper') {
    return "Scissors wins!"
  }

  if (a === 'scissors' && b === 'rock') {
    return "Rock wins!"
  }

  if (a === 'rock' && b === 'rock') {
    return "It's a tie!"
  }

}


// Don't edit below these lines
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
