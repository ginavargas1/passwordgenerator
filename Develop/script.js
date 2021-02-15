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
    var symbols = confirm ('Would you like to add special symbols?')

    // adding a minimum amount of numbers, lowerCases, upperCases & symbols
    var minimumCount = 0;

    var minimumNumbers = "";
    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumSymbolSet ="";

    // adding functions
    var functionArray = [
      function getNumbers () {
        return String.fromCharCode(Math.floor(Math.random()*10+48));
      },

      function getLowerCases () {
        return String.fromCharCode(Math.floor(Math.random()* 26 + 97));
      },

      function getUpperCases () {
        return String.fromCharCode(Math.floor(Math.random()* 26 + 65));
      },

      function getSymbolsSet (){
          return symbolsSet(Math.floor(Math.random()* symbolsSet.length));
      }
    ];

    if (numbers === true) {
      minimumNumbers = functionArray[0];
      minimumCount ++;
    }

    if 


  }




