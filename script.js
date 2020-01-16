const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+","[","]","{","}",";",":","'",'"',",",".","/","<",">","?"]

document.querySelector(".btn").addEventListener("click", function(){
    let charList = [];
    let charNum = prompt("How many characters do you want your password to be?");
    if(charNum < 8){
        alert("Your password must have at least 8 characters");
        charNum = prompt("How many characters do you want your password to be?");
    }
    let hasNum = confirm("Do you want numbers in your password?");
    let hasLowLetters = confirm("Do you want lowercase letters in your password?");
    let hasUpLetters = confirm("Do you want uppercase letters in your password?");
    let hasSpecialChar = confirm("Do you want special characters in your password?");
    let password = '';
    
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
    if(hasNum === false && hasLowLetters === false && hasUpLetters === false && hasSpecialChar === false){
        alert("You have to have one type of character to make a password")
        hasNum = confirm("Do you want numbers in your password?");
        hasLowLetters = confirm("Do you want lowercase letters in your password?");
        hasUpLetters = confirm("Do you want uppercase letters in your password?");
        hasSpecialChar = confirm("Do you want special characters in your password?");
    }

    for(let i = 0; i < charNum; i++){
        password = password + charList[Math.floor(Math.random() * charList.length)];
    }

    document.querySelector("#password").textContent = password;
})