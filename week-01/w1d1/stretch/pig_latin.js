var args = process.argv.slice(2);

// Check for at least one argument
if (args.length < 1) {
  return console.log("Please provide at least one string");
} 

function translate(array) {
  let result = [];
  array.forEach((entry) => {
    newLatinEntry = entry.slice(1).concat(entry[0] + "ay");
    result.push(newLatinEntry);
  });
  console.log(result.join(" "));
  return; 
}

translate(args);

