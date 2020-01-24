# Random Password Generator

## Summary
Application that creates a random password based on user specified criteria

### HTML & CSS
Used with Bootstrap to create some basic styling. I added checkboxes and an input field for password character length, but the rest was from the starting code.

### JS
Used for all the functionality of the generator. The basic concept was an array for each type of character(numbers, lowercase, uppercase, symbols) combined into a master array if the corresponding checkbox is clicked. A for loop goes through the master array adding random character to the password

## Challenges
I first coded the entire generator using pop up alerts, but there were a few edge cases that I couldn't fix(ex. if the user inputs a password length less than 8 more than twice. I ended up switching the generator to using checkboxes which worked a lot better. I spent a good amount of time looking for bootstrap functionality for the checkboxes, but there weren't any really. I also spent a lot of time making sure that when the user chose a certain type of character that the password would be guranteed to have at least one of that type. I ended up adding one character from that type in the if statement that checked if each checkbox was clicked. 
