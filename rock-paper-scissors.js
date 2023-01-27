const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){    
        return "Player";
    } 
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie!";
    }
    else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } 
}

const playerSelection = prompt("Please select rock, paper or scissors.");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));