// Assignment Code
var generateBtn = document.querySelector("#generate");

 function generatePassword(){

    var finalArray = ["G",4,"%"];
    varfinalPassword = "";

    for(var i=0; i<passwordlength; i++){
      var randomnumber = Math.floor(Math.random()*finalArray);
      finalArray =+ finalArray[randomnumber]
    }

    return
 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
