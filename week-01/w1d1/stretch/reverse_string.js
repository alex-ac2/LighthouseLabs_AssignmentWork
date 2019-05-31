var args = process.argv.slice(2);

// Check for at least one argument
if (args.length < 1) {
  return console.log("Please provide at least one string");
} 

function reverseString(array) {
  array.forEach((entry) => {
    let reverseString = "";
    for (let char of entry) {
      reverseString = char.concat(reverseString);
    }
    console.log(reverseString);
  });
}

reverseString(args);
