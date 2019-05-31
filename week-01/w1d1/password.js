var args = process.argv.slice(2);

// Check for two arguments
if (args.length > 1) {
  return console.log("Please provide only one password");
} else if (args.length < 1) {
  return console.log("Please provide a password");
}

// Declare set of replace characters
var replaceCharacters = {
  a: "4",
  e: "3",
  o: "0",
  l: "1"
};


function obfuscate(args) {
  let newString = "";

  for (let char of args) {
    //console.log(char);
    switch(char) {
      case "a": 
        newString += replaceCharacters.a;
        break;
      case "e":
        newString += replaceCharacters.e;
        break;
      case "o":
        newString += replaceCharacters.o;
        break;
      case "l":
        newString += replaceCharacters.l;
        break;
      default: 
        newString += char;
    }
  }
  return newString;
}

var newPassword = obfuscate(args[0]);

// Test function
console.log(newPassword);


