var fs = require("fs");
var input = fs.readFileSync('./input.txt').toString();
var numbers = input.split("\n");

// Remove empty new line at end of array
//if (isNaN(parseInt(numbers[numbers.length - 1], 10))) {
//  numbers.pop();
//}

var total = 0;

// Loop through array
numbers.forEach((entry, index) => {
  let element = parseInt(entry, 10);
  if (isNaN(element)) {
    numbers.splice(index, 1);
  } else {
    numbers[index] = element;
    //numbers[index] = parseInt(entry, 10);
    console.log(numbers[index]);
    total += numbers[index];
  }
});

console.log("Total = " + total);

