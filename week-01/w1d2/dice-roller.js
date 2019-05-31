var numberOfDice = process.argv.slice(2);

// Check for two arguments
if (numberOfDice.length > 1) {
  return console.log("Please provide only one number");
} else if (numberOfDice.length < 1) {
  return console.log("Please provide a number");
}

// Check to ensure number from user input
if (isNaN(numberOfDice)) {
  return console.log("Please submit a number");
}

function diceRoll(numberOfDice) {
  let rollResults = [];
  let dice = numberOfDice;
  while (numberOfDice > 0) {
    let result = Math.floor(Math.random() * 7);
    rollResults.push(result);
    console.log(rollResults);
    numberOfDice --;
  }
  return "Rolled " + dice +  " dice: " + rollResults.join(', ');
}

console.log(diceRoll(numberOfDice));
