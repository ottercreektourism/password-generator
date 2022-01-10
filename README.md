# password-generator

Task:
- To generate a password generator
- Passwords will be produced by randomization of the user's preferences (whether they want their password to contain special characters, numbers, uppercase and lowercase letters).
- The final result will contain their desired password length and a randomization of these preferences.

What was done:
- Created a function that would ask the user:
    - How many characters they would like their password to contain
    - Whether they would like their password to contain special characters, numbers, uppercase and lowercase letters
- Window prompt and window confirm were used to ask the user's preferences
- Created a separate function that would concat an array that corresponds to the user's choices to an empty array, iterating through each time they answer a window confirm
- Created a function that would write the password to the web page so the user can see it

How to use:
- Click the "Generate Password" button
- Type in the number of desired characters when prompted
- Click OK or cancel to determine which character types you would like your password to contain.

Screenshots of the working site are provided here:
https://github.com/ottercreektourism/password-generator/issues/1#issue-1098433088

The deployed site is published here: 
https://ottercreektourism.github.io/password-generator/