let rlSync = require('readline-sync');

let answer = Number(Math.floor(Math.random() * 10)); //answer = 0 - 10
let count = 0;

console.log('Try to guess a number between 0 and 10!');

while (count < 3) {

  console.log(`You have ${(3 - count)} turns left.`)
  let ask = Number(rlSync.question("Pick a number between 0 and 10:\n"));

  if (ask === answer) { //win condition
    console.log('That is correct!');
    break;

  } else { //wrong guess
    count += 1;

    if (answer > ask) { //will give you a hint
      console.log('Your guess is too low. Try again');

    } else {
      console.log('Your guess is too high. Try again');
    }
  }
}

if (count === 3) {
  console.log(`The correct answer is ${answer}`);
  console.log('No more turns left. GAMEOVER');
}
