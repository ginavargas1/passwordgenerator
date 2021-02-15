// Assignment Code
var generateBtn = document.querySelector("#generate");

// Adding symbols for function  
const symbolsSet = "!@#$%^&*(){}[]=<>/,.";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

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
    var minimumSymbolsSet ="";

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
      minimumNumbers = functionArray.getNumbers ();
      minimumCount ++;
    }

    if (lowerCases === true) {
      minimumLowerCases = functionArray.getLowerCases ();
      minimumCount ++;
    }

    if (upperCases === true) {
      minimumUpperCases = functionArray.getUpperCases();
      minimumCount++;
  
    }
  
    if (special === true) {
      minimumSymbolsSet = functionArray.getSymbolsSet();
      minimumCount++;
  
    }

    var randomPasswordGenerated = "";

    // for loop
    for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
      var randomNumberPicked = Math.floor(Math.random() * 4);
  
      randomPasswordGenerated += randomNumberPicked;
  
    }
  
    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumSymbolsSet;
  
  
    return randomPasswordGenerated;

  }



