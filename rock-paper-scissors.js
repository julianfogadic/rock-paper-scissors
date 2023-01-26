//Making function to randomly return either rock, paper or scissors
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return(choices[randomChoice]);
}

//Making a function that play single round of Rock Paper Scissor
function playRound(playerSelection, computerSelection) {
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Invalid selection. Please choose rock, paper or scissors";
    }
    if (playerSelection === computerSelection) {
        return "It's a tie";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors!";
        } else {
            return "You lose! Paper beats Rock!";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock!";
        } else {
            return "You lose! Scissors beats Paper!";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beats paper!";
        } else {
            return "You lose! Rock beats Scissors!";
        }
    }
}
    
// Using prompt function to get input from user
const playerSelection = prompt("Please select either rock, paper or scissors.");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

