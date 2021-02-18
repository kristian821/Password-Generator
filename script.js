// Assignment code here

const letters = Array.from('abcdefghijklmonpqrstuvwkyz');
var randomLetter = function() {
  var random = letters[Math.floor(Math.random() * letters.length)];
  console.log(random);
  return random;
};
const numbers = [1,2,3,4,5,6,7,8,9,0];
var randomNumber = function() {
  var random = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(random);
  return random;
};

const specialChars = ['!', '@', '#', '$', '%', '&', '*', '-'];
var randomChar = function() {
  var random = specialChars[Math.floor(Math.random() * specialChars.length)];
  console.log(random);
  return random;
};

// create a new array for each possiblity for the switch statement to iterate through
// Change for loop to while loop, and compare password.length and passwordLength

var charArray = letters.concat(specialChars);
console.log(charArray);
var numArray = letters.concat(numbers);
console.log(numArray);
var allArray = charArray.concat(numbers);


// Refactor code to reduce lines
var random = function(Array) {
  random = Array[Math.floor(Math.random() * Array.length)];
  random.toString();
  return random;
}




password = password.toString();


var generatePassword = function() {

  var passwordLength = prompt("How long would you like your password to be?");
  passwordLength = parseInt(passwordLength);
  

  var password = [];

  var addToPass = function(toString) {
    password.push(String);
  }
  

  var numsConfirmation = prompt("Would you like numbers in your password?");
  

  var specialConfirmation = prompt("Would you like special characters in you password?");
  

  for (i = 0; i < passwordLength; i++) {
    switch(numsConfirmation, specialConfirmation) {
      case (true, true):
        random(allArray);
        addToPass(random);
        return password;

      case (true, false):
        random(numArray);
        addToPass(random);
        return password;
      
      case (false, true):
        random(charArray);
        addToPass(random);
        return password;

      default:
        random(letters);
        addToPass(random);
        return password;
    }

  //  Repalce with a switch statement
  //   if (specialConfirmation && numsConfirmation){
  //     words();
  //     nums();
  //     special();
      
  //   } else if (specialConfirmation) {
  //     words();
  //     special();
  //   } else if (numsConfirmation) {
  //     words();
  //     nums();
  //   } else {
  //     words();
  //   }    
  }

  password = password.join('');
  console.log(password);
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
