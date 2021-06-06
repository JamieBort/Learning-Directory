const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Type a phrase, please. ', (answer) => {
  // TODO: Log the answer in a database
  if (answer.length<2){
    console.log(`Your phrase, "${answer}", has  ${answer.length} character.`);    
  } else {
    console.log(`Your phrase, "${answer}", has  ${answer.length} characters.`);
  }
  rl.close();
});
