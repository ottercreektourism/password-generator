// defining "generateBtn" as a variable.
// query.Selector is a method of "document".
// This makes the "generateBtn" variable equal to #generate, so that it can use it in the function when it is called.
var generateBtn = document.querySelector("#generate");
var uppercaseChoices = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowercaseChoices = ['abcdefghijklmnopqrstuvwxyz'];
var numberChoices = ['1234567890'];
var specialCharacterChoices = ['!"#$%&()*+,-./:;<=>?@[]^_`{|}~'];
var developerTesterArray = ['qwertyuiopasdfghjklzxcvbnm'];


function askpasswordLength(){
    var desiredLength = prompt("How many characters would you like your password to be?");
    if (desiredLength != null && desiredLength > 7 && desiredLength < 129) {
        document.getElementById("password").innerHTML = ("Your password will be " + desiredLength + "characters long.")
    }
    else{
        document.getElementById("password").innerHTML = ("Please choose a valid password length.")
    }
}
// Write password to the #password input
// This invokes the askUppercase function and gives it something to do
// Will occur once the event listener detects a click of the button.
function askSpecialCharacters() {
    let specialCharacterConfirm = "Do you want your password to include special characters?";
    if (confirm(specialCharacterConfirm) == true) {
      specialCharacterConfirm = "Great! Your password will include special characters.";
      var rand = Math.floor(Math.random() * developerTesterArray.length);
      var password = developerTesterArray[rand];

    } else {
        specialCharacterConfirm = "Ok. Your password will not include special characters.";
    }
    document.getElementById("password").innerHTML = specialCharacterConfirm;
}

function askNumeric() {
    let numericConfirm = "Do you want your password to include numeric characters?";
    if (confirm(numericConfirm) == true) {
        numericConfirm = "Great! Your password will include numeric characters.";
      var rand = Math.floor(Math.random() * developerTesterArray.length);
      var password = developerTesterArray[rand];

    } else {
        numericConfirm = "Ok. Your password will not include numeric characters.";
    }
    document.getElementById("password").innerHTML = numericConfirm;
}

function askLowercase() {
    let lowercaseConfirm = "Do you want your password to include lowercase letters?";
    if (confirm(lowercaseConfirm) == true) {
        lowercaseConfirm = "Great! Your password will include lowercase letters.";
      var rand = Math.floor(Math.random() * developerTesterArray.length);
      var password = developerTesterArray[rand];

    } else {
        lowercaseConfirm = "Ok. Your password will not include lowercase letters.";
    }
    document.getElementById("password").innerHTML = lowercaseConfirm;
}

function askUppercase() {
    let uppercaseConfirm = "Do you want your password to include uppercase letters?";
    if (confirm(uppercaseConfirm) == true) {
      uppercaseConfirm = "Great! Your password will include uppercase letters.";
      var rand = Math.floor(Math.random() * developerTesterArray.length);
      var password = developerTesterArray[rand];

    } else {
      uppercaseConfirm = "Ok. Your password will not include uppercase letters.";
    }
    document.getElementById("password").innerHTML = uppercaseConfirm;
}

    // Inside the function, we have to define variable "password" and set it equal 
    // to generatePassword function so that the password that is named will be whatever 
    // the password was set to.
  var password = generatePassword();
    //This grabs the id = password from the html so that it can be used within the passwordText variable.
  var passwordText = document.querySelector("#password");

//   This makes sure that the password text value that is being created is always passed to the password.
  passwordText.value = password;

// Add event listener to generate button
// event listener will detect when the button is being clicked, and at that point, will invoke the writePassword function
generateBtn.addEventListener("click", askUppercase);
