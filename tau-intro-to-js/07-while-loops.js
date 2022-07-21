let password = "tomorrow";
let userGuess = "";

// The line above generates a pop-up to enter the password. if the pass does not match the loop will continue generating the pop-up.

// while (userGuess !== password) {
//    userGuess = prompt("Please enter you password"); 
// }

// alert("Login Successful");

// 5 * 4 * 3 * 2 * 1
let factorial = 1;
let number = 5;
let original = number;

do {
    factorial = factorial * number;
    number --
} while (number > 0);

console.log( original + "factorial is" + factorial );