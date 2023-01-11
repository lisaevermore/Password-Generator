// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password
// At least 10 characters but no more than 64.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Function to prompt user for password options
let user = 0;
let userPreference = [];
function getPasswordOptions() {
    user = prompt("Password Length?");
  while (user <= 10 || user >= 64){
    alert("Your Password Length need to be more than 10 and less than 64");
    return getPasswordOptions(); 
  }

  let getSpecialchar = confirm("Any special characters?");
  let getInter = confirm("Want to add any number?");
  let getLowerCase = confirm("Any lowercase characters?");
  let getUpperCase = confirm("Any uppercase characters?");
  while (!getSpecialchar && !getInter && !getLowerCase && !getUpperCase ){ // ensure user chooses at least one option
    alert("You need to pick atleast one types of Character");
     getSpecialchar = confirm("Any special characters?");
     getInter = confirm("Want to add any number?");
     getLowerCase = confirm("Any lowercase characters?");
     getUpperCase = confirm("Any uppercase characters?");
    return;
  };

   userPreference = []; // arr list of the user perference for the password 
  if(getSpecialchar){
    userPreference = userPreference.concat(specialCharacters);
  }
  if(getInter){
    userPreference = userPreference.concat(numericCharacters);
  }
  if(getLowerCase){
    userPreference = userPreference.concat(lowerCasedCharacters);
  }
  if(getUpperCase){
    userPreference = userPreference.concat(upperCasedCharacters);
  }
  return (user);
 
}
//console.log(user);
//console.log(getPasswordOptions())
// i need user input password length with the user perference to make a random password
// Function for getting a random element from an array
function getRandom(arr) {
  var randomElement = random.choice(getPasswordOptions())
  return randomElement;
}
//console.log(getRandom())

// Function to generate password with user input
function generatePassword() {
  let randomPassword = "";
  var lengthArr = getPasswordOptions()
  for(let i = 0; i < lengthArr; i++){
    randomPassword += userPreference[Math.floor(Math.random() * userPreference.length)];
  } 
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);