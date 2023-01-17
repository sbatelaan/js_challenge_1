// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var upperBox = document.querySelector("#upperCase");
var numbersBox = document.querySelector("#numbers");
var symbolsBox = document.querySelector("#symbols");
var lengthBox = document.querySelector("#length");

var functionList = {
  lowerCase: lowerCaseGen,
  upperCase: upperCaseGen,
  symbols: symbolsGen,
  num: numbersGen
};


//write a function that opens prompt when generate is clicked
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

function generatePassword() {
  var length = Number(prompt('What is the length of your password? (Min 8 - Max 128'));
  if (length < 8 || length > 128) {
  alert('Try again')
  generatePassword()
  }
  var numbersChars = confirm('Do you want numbers?')
  var lowerCaseChars = confirm('Do you want lower case letters?')
  var upperCaseChars = confirm('Do you want upper case letters?')
  var symbolsChars = confirm('Do you want symbols?')
  if (numbersChars === false && lowerCaseChars === false && upperCaseChars === false && symbolsChars === false) {
    alert('Try again')
    generatePassword()
  }
  for (var i = 0; i < length; i++) {
    var string = ''
    
  }
}

//[Done] write prompt asking for criteria (Going with checkboxes instead)
//[Done] when prompted for critera, choose length between 8-128 char
//[Done] ask which chars to include, num, lower/upper, and/or spec chars
//[Done]Create function for random generators
//  Create listeners(maybe?) for checkboxes
//  Somehow apply listeners to functions
//password is displayed in an alert or written to the page

// Write password to the #password input
function writePassword()  {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


