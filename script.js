// Assignment code here
//create arrays of different options
let letters = Array.from('abcdefghijklmonpqrstuvwxyz');

let numbers = [1,2,3,4,5,6,7,8,9,0];

let specialChars = ['!', '@', '#', '$', '%', '&', '*', '-'];

let charArray = letters.concat(specialChars);

let numArray = letters.concat(numbers);

let allArray = charArray.concat(numbers);

var password = [];

var random = function(Array) {
 var random = Array[Math.floor(Math.random() * Array.length)];
 password.push(random); 
};

var generatePassword = function() {
  //initialize password as an empty array whenever new password is generated
  password = [];

  // Ask user how long they would like password to be
  var passwordLength = prompt("How long would you like your password to be?");
  passwordLength = parseInt(passwordLength);
  
  // Ask user if they would like to include numbers
  var numsConfirmation = confirm("Would you like numbers in your password?");
  
  // Ask user if they would like to include special characters
  var specialConfirmation = confirm("Would you like special characters in you password?");
 
  // iterate through for loop to make password same length as user prompt
  for (;password.length < passwordLength;) {

    switch(true) {

      case(numsConfirmation && specialConfirmation):
        random(allArray);
        break;

      case(numsConfirmation && !specialConfirmation):
        random(numArray);
        break;

      case(!numsConfirmation && specialConfirmation):
        random(charArray);
        break;

      default:
        random(letters);
        break;
    }
  }

  // Turn password array into  a string
  password = password.join('');
  password = password.toString();
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
