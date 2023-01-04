// set variables

var choiceArray = [];
var characterLength = 8;
var lowercaseArray = [];
var uppercaseArray = [];
var specialArray = [];
var numbersArray = [];

var lowercase = (() => {
  var caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
  return caps.concat();
})();

var uppercase = (() => {
  var caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps.concat();
})();

var specialCharacters = (() => {
  var caps = [...Array(15)].map((val, i) => String.fromCharCode(i + 33));
  return caps.concat();
})();

var numbers = (() => {
  var caps = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
  return caps.concat();
})();

lowercaseArray = lowercase;
uppercaseArray = uppercase;
specialCharactersArray = specialCharacters;
numbersArray = numbers;

// create user input
function userInput() {
  choiceArray = [];
  characterLength = parseInt(prompt("Please choose password length? (8 - 128 characters)"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please choose password length between 8 - 128 characters.");
    return false;
  }
  if(confirm("Include lowercase characters?")) {
    choiceArray = choiceArray.concat(lowercaseArray);
  }
  if(confirm("Include UPPERCASE characters?")) {
    choiceArray = choiceArray.concat(uppercaseArray);
  }
  if(confirm("Include special (;,./-) characters?")) {
    choiceArray = choiceArray.concat(specialCharactersArray);
  }
  if(confirm("Include numbers?")) {
    choiceArray = choiceArray.concat(numbersArray);
  }
  alert("Put it somewhere safe!")
  return true;
}

// grab button and assign function
var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", createPassword);

// create password function
function createPassword() {
  var correctInput = userInput();

  if(correctInput) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } 
}

// generate password
function generatePassword() {
	var password = "";
	for(var i = 0; i < characterLength; i++) {
	  var generatedPassword = Math.floor(Math.random() * choiceArray.length);
	  password = password + choiceArray[generatedPassword];
	}
	return password;
  }
  

  