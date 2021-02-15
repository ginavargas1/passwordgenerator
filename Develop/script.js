// // Assignment Code
// var generateBtn = document.querySelector("#generate");

var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");




// Code will generate password by only clicking the 'Generate Password' button
// function generatePassword() {
//   var length = 8;
//   var setCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//   var password = "";
//   for (i = 0, n = setCharacters.length; i < length; i++) {
//       password += setCharacters.charAt(Math.floor(Math.random() * n));

    
//   }
//   return password;
// }

//  generatePassword();



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
