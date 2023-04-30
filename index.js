let randomnumber = Math.floor(Math.random() * 100) + 1;
let guesses = 100;
while (guesses > 0) {
  let guess = prompt("Guess a number between 1 and 100. You have " + guesses + " guesses left.");
  guess = Number.parseInt(guess);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Invalid guess. Please enter a number between 1 and 100.");
  } else {
    guesses--;
    if (guess === randomnumber) {
      alert("Congratulations, you guessed the number!");
      break;
    } else if (guess < randomnumber) {
      alert("Your guess is too low.");
    } else {
      alert("Your guess is too high.");
    }
  }
}
if (guesses === 0) {
  alert("Sorry, you ran out of guesses. The secret number was " + randomnumber + ".");
}

