// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// Adding symbols for function  
const symbolsSet = "!@#$%^&*(){}[]=<>/,."


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Adding prompts 
  function generatePassword () {
    var passwordLength = prompt ('How many characters would you like your password to be? Password must be a minimum of 8 and maximum of 128.');
    var numbers = confirm ('Would you like numbers in your password?');
    var lowerCases = confirm ('Would you like lowercases in your password?');
    var upperCases = confirm ('Would you like uppercases in your password?');
    var symbols = (asdfasdf)

  }




