// Assignment code here

//create variables for character types
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var theNums = ["1","2","3","4","5","6","7","8","9","10"]

var special = ["!","@","#","$","%","^","&","*","(",")","-","+","=","?","<",">"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//write function to get user preferences 
function getPreferences(){
    var userPreferences = {};
    console.log(userPreferences);
    var length = parseInt(prompt("How many characters in your password"));
    //make sure user selects number between 8-128
    if(!length){
      console.log()
      alert("Not a number, try again!")
      return;
    }
    if(length < 8 || length > 128 ){
      console.log('test')
      alert("Please choose value between 8-128")
      return;
    }
    userPreferences.length = length
    console.log(userPreferences);
    var lower = confirm("Do you want lower case letters, OK for yes CANCEL for no ")
    userPreferences.lower = lower
    console.log(userPreferences)
    var upper = confirm("Do you want upper case letters, OK for yes CANCEL for no")
    userPreferences.upper = upper
    console.log(userPreferences)
    var symbols = confirm("Do you want symbols characters, OK for yes CANCEL for no")
    userPreferences.symbols = symbols
    console.log(userPreferences)
    var numeric = confirm("Do you want numeric characters, OK for yes CANCEL for no")
    userPreferences.numeric = numeric
    console.log(userPreferences)
    //make sure that user selected at least one symbol
    if(!userPreferences.lower && !userPreferences.upper && !userPreferences.numeric && !userPreferences.symbols ){
      console.log('test')
      alert("Must choose at least one type of character!")
      return;
    }
    return userPreferences
}

//write a function to generate password
function generatePassword(){
    // get preferences from user
    var preferences = getPreferences();
    console.log(preferences)
    //creat empty array to hold potential characters depending on user preferences
    var characters = []
   //create empty array to hold password and generate
   var pwd = []

       //use if statement to check the type of characters the want then push
    if(preferences.lower){
      console.log()
      //if they do want it, push the lower case array into possible characters with concat method
      characters = characters.concat(lowerCase)
      console.log(characters)
    }

    if(preferences.upper){
      console.log()
      characters = characters.concat(upperCase)
    }
    if(preferences.symbols){
      characters = characters.concat(special)
    }
    if(preferences.numeric){
      characters = characters.concat(theNums)
    }

    //loop over possible characters and randomly select characters for length number of times
    for( var i = 0; i < preferences.length; i++){
      console.log()
      //grab a random element of the character array and push into pwd array
      pwd.push(characters[Math.floor(Math.random() * characters.length)])
    }
    console.log(pwd)
    //after you created that array you have to turn pwd into string

    return pwd.join("")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page