// Assignment Code
var generateBtn = document.querySelector("#generate");









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
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
