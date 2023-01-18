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

//Only needed this for checkboxes
// var upperBox = document.querySelector("#upperCase");
// var numbersBox = document.querySelector("#numbers");
// var symbolsBox = document.querySelector("#symbols");
// var lengthBox = document.querySelector("#length");


//Don't need this anymore
// var functionList = {
//   lowerCase: lowerCaseGen,
//   upperCase: upperCaseGen,
//   symbols: symbolsGen,
//   num: numbersGen
// };


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

function generatePassword(lowerCase, upperCase, num, symbols) {
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
  else {
  var password = "";
    
    var charsType = [lowerCase, upperCase, symbols, num].length;
    
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
    // I was in the process of writing out each if statement for
    //every combination and decided to check if just calling for each function would work
    //It does. Thank goodness I didnt have to write all that.
    //Is there a way to shortent this even more?

    // if (lowerCaseChars && symbols) {
    //   password += lowerCaseGen();
    //     symbolsGen();
    // }
    // if (lowerCaseChars && upperCaseChars) {
    //   password += lowerCaseGen();
    //     upperCaseGen();
    // }
    // if (lowerCaseChars && numbersChars) {
    //   password += lowerCaseGen();
    //     numbersGen();
    // }
    // if (upperCaseChars && symbols) {
    //   password += upperCaseGen();
    //     symbolsGen();
    // }
    // if (upperCaseChars && numbersChars) {
    //   password += upperCaseGen();
    //     numbersGen();
    // }
    // if (symbols && numbersChars) {
    //   password += symbolsGen();
    //     numbersGen();
    // }

  }
      
  var password = password.slice(0, length)
  return password;
  }




// Write password to the #password input
function writePassword()  {
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
