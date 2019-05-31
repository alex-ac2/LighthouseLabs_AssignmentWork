var args = process.argv.slice(2);

// Check for two arguments
if (args.length !== 2) {
  return console.log("Provide two numbers");
}

// Convert argument strings to numbers
args.forEach((arg, index) => {
  args[index] = Number(arg);
});

var sum = args[0] + args[1];
console.log(sum);
