// Assignment Code

//TODO LIST
//[Done] write prompt asking for criteria
//[Done] when prompted for critera, choose length between 8-128 char
//[Done] ask which chars to include, num, lower/upper, and/or spec chars
//[Done]Create function for random generators
//[Done] make else statements for unmet required criteria
//[Done] write if statements to call each random generator function
//[Done] password is displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// These are functions that will generate random characters.
//Function for numbers
function numbersGen() {
  var num = '1234567890';
  return num[Math.floor(Math.random() * num.length)];
}

//Function for upper Case
function upperCaseGen() {
  var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

// Functions lowerCase
function lowerCaseGen() {
  var lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
//Functions for symbols
function symbolsGen() {
  var symbols = '!@#$%^&*()';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//This is the ultimate function that will generate password.
//I set the parameters to the variables set in the funtions above

function generatePassword(lowerCase, upperCase, num, symbols) {
  // I gave length a number constructor to give it a numeric value
  //when generate is clicked this prompt will show
  var length = Number(prompt('What is the length of your password? (Min 8 - Max 128'));
  //If length is less than 8 OR more than 128
  //Then an alert will show and will start again at the top of this function
  if (length < 8 || length > 128) {
  alert('Try again')
  generatePassword()
  }
  //If length meets requirements, we start a series of prompts asking for criteria
  //At least one must be selected
  var numbersChars = confirm('Do you want numbers?')
  var lowerCaseChars = confirm('Do you want lower case letters?')
  var upperCaseChars = confirm('Do you want upper case letters?')
  var symbolsChars = confirm('Do you want symbols?')
  
  //If none are selected, alert prompt and function restarts at the top
  if (numbersChars === false && lowerCaseChars === false && upperCaseChars === false && symbolsChars === false) {
    alert('Try again')
    generatePassword()
  }
  //If requirements are met, we begin assigning value to password
  else {
    //Empty string where password will be placed
  var password = "";
    
  //This is our for loop. Set to be less than length enetered in the prompt.
  //Here we will check if each var is true
  //If true it will attach each function to the password var
    for (var i = 0; i < length; i++) {
      if (lowerCaseChars) {
        password += lowerCaseGen();
      }
      if (symbolsChars) {
      password += symbolsGen();
    }
    if (upperCaseChars) {
      password += upperCaseGen();
    }
    if (numbersChars) {
      password += numbersGen();
    }
    }
  }
      //Here we slice our array to start at 0 and end at the length of the number entered
  var password = password.slice(0, length)
  return password;
  }

// Write password to the #password input
//When this function is called, the generatePassword function will run
//Once generatePassword hads run, we should have a value to output
function writePassword()  {
  var password = generatePassword();
  //This is where our generated password will go
  //We have selected thr ID in the HTML
  //Will set the value to equal password var which is set in the generatePassword function
  passwordText.value = password;
}

// Add event listener to generate button
//When generate button is clicked, it will run the writePassword function
//This starts the generatePassword funtion above
generateBtn.addEventListener("click", writePassword)
