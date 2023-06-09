// create two empty strings
let userWords = "";
let userInput = "";

// keep looping until the user decides to exit
while (true) {
    
    // get the input from the user
    userInput = prompt("Enter Something (E to exit): ");

    // break the loop if the user decides to exits
    if (userInput.toUpperCase() === "E") {
        break;
    }

    // add the input to the userWords
    userWords += "\n" + userInput;

    // display all the words the user has entered
    alert("You have entered: " + userWords);
}