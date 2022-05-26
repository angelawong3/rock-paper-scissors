// store wins, ties, and losses
var wins = 0;
var ties = 0;
var losses = 0;
var options = ["R", "P", "S"];

function main() {
  // take user input
  const userOption = window.prompt("Please pick an option") ?? "";
  const captitalizeduserOption = userOption.toUpperCase();

  // computer picks a choice at random
  const random = Math.floor(Math.random() * options.length);
  const compOption = options[random];

  // compute who won
  if (userOption === compOption) {
    window.alert("It's a tie!");
    ties++;
  }
}

// play again option
