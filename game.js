
/* function to use input as player choice */   
function getUserChoice() {
    userInput =document.getElementById("playerChoice").value;
    if (userInput === "human") {
        return "human";
    }
    else if (userInput === "bear") {
        return "bear";
    }
    else if (userInput === "gun") {
        return "gun";
    }
    else {
        return "Please enter correct data (human, bear or gun)";
    }
}

/* function to get computer choice according to numbers from 1 to 3*/ 
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}


/* function to compare userInput and computer choice to determine winner as shown probabilities */
function determineWinner(userInput, computerChoice) {
    if (userInput === computerChoice) {
        return 'It is a tie';
    }
    if (userInput === 'human') {
        if (computerChoice === 'bear') {
            return 'You have been mauled by a bear';
        } else {
            return 'You have disarmed a gun';
        }
    }
    if (userInput === 'bear') {
        if (computerChoice === 'gun') {
            return 'You have been shot by a gun';
        } else {
            return 'You have mauled a human';
        }
    }
    if (userInput === 'gun') {
        if (computerChoice === 'human') {
            return 'Your gun has been disarmed';
        } else {
            return 'You have shot a bear';
        }
    }
}


/* function to launch the game and send alert with the result as choices are done*/ 
function playGame() {
    userInput = getUserChoice();
    computerChoice = getComputerChoice();
    alert(determineWinner(userInput, computerChoice));
}


