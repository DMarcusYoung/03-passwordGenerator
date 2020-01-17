//Arrays of characters split by type
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+","[","]","{","}",";",":","'",'"',",",".","/","<",">","?"]

//Generate Password button functionality
document.querySelector("#generate").addEventListener("click", function(){
    //Prompting user for desired password choices + var declaration
    let charList = [];
    let charNum = prompt("How many characters do you want your password to be?");
        //Checking that the number of characters for the password is between 8 and 128
        if(charNum < 8 || charNum > 128){
            alert("Your password must be between 8 and 128 characters");
            charNum = prompt("How many characters do you want your password to be?");
        }
    let hasNum = confirm("Do you want numbers in your password?");
    let hasLowLetters = confirm("Do you want lowercase letters in your password?");
    let hasUpLetters = confirm("Do you want uppercase letters in your password?");
    let hasSpecialChar = confirm("Do you want special characters in your password?");
    let password = '';
    //If user chooses to use a certain type of character, that type's array are added to a master array used later for randomization
    if(hasNum) {
        charList = charList.concat(numbers);
    }
    if(hasLowLetters){
        charList = charList.concat(lowLetters);
    }
    if(hasUpLetters){
        charList = charList.concat(upLetters);
    }
    if(hasSpecialChar){
        charList = charList.concat(specialChar);
    }
    //Checking that user chose at least one type of character
    if(hasNum === false && hasLowLetters === false && hasUpLetters === false && hasSpecialChar === false){
        alert("You have to have one type of character to make a password")
        hasNum = confirm("Do you want numbers in your password?");
        hasLowLetters = confirm("Do you want lowercase letters in your password?");
        hasUpLetters = confirm("Do you want uppercase letters in your password?");
        hasSpecialChar = confirm("Do you want special characters in your password?");
    }
    //Loops through randomly choosing a character within the master password array the chosen character length times.
    for(let i = 0; i < charNum; i++){
        password = password + charList[Math.floor(Math.random() * charList.length)];
    }

    document.querySelector("#password").textContent = password;
})

//Copies password to clipboard and alerts user when copy button is pressed
document.querySelector("#copy").addEventListener("click", function(){
    document.querySelector("#password").select();
    document.execCommand("copy");
    alert("Your password was copied to the clipboard");
})