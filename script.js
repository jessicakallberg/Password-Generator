// Assignment code here
//create variables for character types
var lowerCase = ["a", "b", "c"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//write function to get user preferences 
function getPreferences(){
    var userPreferences = {};
    var length = parseInt(prompt("How many characters in your password"));
    userPreferences.length = length
    var lower = confirm("Do you want lower case letters")
    userPreferences.lower = lower
    console.log(userPreferences)
    return userPreferences
}

//write a function to generate password
function generatePassword(){
    // get preferences from user
    var preferences = getPreferences();
    console.log(preferences)
    //creat empty array to hold potential characters depending on user preferences
    var characters = []
    //use if statement to check the type of characters the want then push
    return pwd 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page