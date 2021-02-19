// Assignment code here

let lettersLower = Array.from('abcdefghijklmonpqrstuvwxyz');

let lettersUpper = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

let numbers = [1,2,3,4,5,6,7,8,9,0];

let specialChars = ['!', '@', '#', '$', '%', '&', '*', '-'];

var password = [];

var passwordArray = [];

var random = function(Array) {
 var random = Array[Math.floor(Math.random() * Array.length)];
 password.push(random); 
};

var generatePassword = function() {

  password = [];

  

  var passwordLength = prompt("How many characters would you like your password to be?");

  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    alert("Your password must be at least 8 characters. Try again.");
    generatePassword();
  } else if (passwordLength > 128) {
    alert("Your password cannot be longer than 128 characters. Try again.");
    generatePassword();
  }

  var typeConfirm = confirm("Would you like lowercase letters?");

    if (typeConfirm === true) {
      passwordArray = passwordArray.concat(lettersLower);
      password.join('');
    }

  var upperConfirm = confirm("Would you like uppercase letters?");

    if (upperConfirm === true) {
      passwordArray = passwordArray.concat(lettersUpper);
      password.join('');
    }
  
  var numsConfirmation = confirm("Would you like numbers?");

    if (numsConfirmation === true) {
      passwordArray = passwordArray.concat(numbers); 
      password.join('');
    }
  
  var specialConfirmation = confirm("Would you like special characters?");

    if (specialConfirmation === true) {
      passwordArray = passwordArray.concat(specialChars);
      password.join('');
    }

    if (passwordArray.length === 0) {
      alert("You must pick an option. Please try again.")
      passwordArray = [];
      console.log(passwordArray);
      generatePassword();
  } else {
 
  for (;password.length < passwordLength;) {
      random(passwordArray);
  }

  
  password = password.toString();
  return password;
}
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
