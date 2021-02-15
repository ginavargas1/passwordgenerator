// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = 8;
  var  setCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var retVal = "";
  for (var i = 0, n = setCharacters.length; i < length; ++i) {
      retVal += setCharacters.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
