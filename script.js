// Pulls the #generate id into the JS and allows it to be accessed by using the "generateBtn" variable.
var generateBtn = document.querySelector("#generate");

// Creating arrays with all of the choices that could be added depending on the user's input.
var uppercaseChoices = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var uppercaseArray = uppercaseChoices.split('');

var lowercaseChoices = 'abcdefghijklmnopqrstuvwxyz';
var lowercaseArray = lowercaseChoices.split('');

var numberChoices = '1234567890';
var numberArray = numberChoices.split('');

var specialCharacterChoices = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
var specialCharacterArray = specialCharacterChoices.split('');

// Empty array that each desired set of characters will concat to.
var userChoiceArray = []

// Invokes the function writePassword and tells it to ask how many characters the user would like.
// Contains all of the confirm windows for the each of the password preferences.
function generatePassword() {
    // Resets the array to empty for each iteration of the code.
    userChoiceArray = []
    var desiredLength = prompt("How many characters would you like your password to be? \n Choose between 8 and 128.");
    if (desiredLength != null && desiredLength > 7 && desiredLength < 129) {
    
        // defines the specialCharacterConfirm variable as whatever the user's preference on special characters is.
        specialCharacterConfirm = confirm("Click OK to include special characters.");
        if (specialCharacterConfirm == true) {
            userChoiceArray = userChoiceArray.concat(specialCharacterArray)
        }

        // defines the numericConfirm variable as whatever the user's preference on numeric characters is.
        numericConfirm = confirm("Click OK to include numeric characters.");
        if (numericConfirm == true) {
            userChoiceArray = userChoiceArray.concat(numberArray)
        }

        // defines the lowercaseConfirm variable as whatever the user's preference on lowercase characters is.
        lowercaseConfirm = confirm("Click OK to include lowercase letters.")
        if (lowercaseConfirm == true) {
            userChoiceArray = userChoiceArray.concat(lowercaseArray)
        }

        // defines the uppercaseConfirm variable as whatever the user's preference on uppercase characters is.
        uppercaseConfirm = confirm("Click OK to include uppercase letters.");
        if (uppercaseConfirm == true) {
            userChoiceArray = userChoiceArray.concat(uppercaseArray)
        }
        else if (specialCharacterConfirm != true && numericConfirm != true && lowercaseConfirm != true && uppercaseConfirm != true){
            alert("Please select one or more options.");
            generatePassword.desiredLength();
        }
        return createPasswordArray(desiredLength);
    } 
    // If the user types < 7, > 128 or nothing for desiredLength, this message will appear.
    else {
        alert("Please choose a valid password length.");
        return ""
    }}

// Created function to pass the user's desired password length to the randomizer. 
// Randomly generates a number and assigns it to an item in the userChoiceArray.
// Adds a random array item to the password for each iteration, up to the user's desired password length.
function createPasswordArray(desiredLength) {
    var password = ""
    for (var i=0; i<desiredLength; i++) {
        var randomNumber = Math.floor(Math.random() * userChoiceArray.length);
        password = password + userChoiceArray[randomNumber];
    }
    return password;
}
// Created a function to write the password so the user can see it.
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Invokes the writePassword function when the Generate Password button is clicked.
generateBtn.addEventListener("click", writePassword);