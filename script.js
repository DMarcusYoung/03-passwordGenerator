//Arrays of characters split by type
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const specialChar = ["!","@","#","$","%","^","&","*","(",")","_","+","[","]","{","}",";",":","'",'"',",",".","/","<",">","?"];

//Generate Password button functionality
document.querySelector("#generate").addEventListener("click", function(){
    //Declaring variables
    let charList = [];
    let charNum = document.getElementById("passwordLength").value;
    let password = '';
    let charTypeCount = 0;
    let randomPassPos = Math.floor(Math.random() * (password.length+1));

    //Checking that the number of characters for the password is between 8 and 128
    if(charNum < 8 || charNum > 128){
        document.querySelector("#password").textContent = "Your password must be between 8 and 128 characters long"
        return
    }
    //Adds a random character from selected array into a random spot to ensure one of each selected type of character is added and adds that character type array to the master array for later randomization
    function addCharType(elId, charArray){
        if(document.getElementById(elId).checked) {
            randomPassPos = Math.floor(Math.random() * (password.length+1));
            password = password.substr(0, randomPassPos) + charArray[Math.floor(Math.random() * (charArray.length))] + password.substr(randomPassPos);
            charList = charList.concat(charArray);
            charTypeCount++;
        }
    }
    // running the above function for each type of character
    addCharType("numBox", numbers);
    addCharType("lowBox", lowLetters);
    addCharType("upBox", upLetters);
    addCharType("symbolBox", specialChar);

    //Loops through randomly choosing a character within the master password array and randomly placing it in the password the chosen password length times.
    for(let i = 0; i < (charNum-charTypeCount); i++){
        password = password.substr(0, randomPassPos) + charList[Math.floor(Math.random() * (charList.length))] + password.substr(randomPassPos);
    }

    document.querySelector("#password").textContent = password;
})

//Copies password to clipboard and alerts user when copy button is pressed
document.querySelector("#copy").addEventListener("click", function(){
    document.querySelector("#password").select();
    document.execCommand("copy");
    alert("Your password was copied to the clipboard");
})