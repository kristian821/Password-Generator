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



password = password.toString();


var generatePassword = function() {

  var passwordLength = prompt("How long would you like your password to be?");
 
  passwordLength = parseInt(passwordLength);
  var words = function() {
    password.push(randomLetter());
  }

  var password = [];
  var words = function() {
    password.push(randomLetter());
  }

  var numsConfirmation = prompt("Would you like numbers in your password?");
  var nums = function() {
    password.push(randomNumber());
  };

  var specialConfirmation = prompt("Would you like special characters in you password?");
  var special = function() {
    password.push(randomChar());
  }

  for (i = 0; i < passwordLength; i++) {
    if (specialConfirmation && numsConfirmation){
      words();
      nums();
      special();
      
    } else if (specialConfirmation) {
      words();
      special();
    } else if (numsConfirmation) {
      words();
      nums();
    } else {
      words();
    }    
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
