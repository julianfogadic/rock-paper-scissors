//Making function for computer to randomly selects rock, paper or scissors

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

//Making function to check winner

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

//Making function to play a single round of rock, paper, scissors

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie!";
    }
    else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } 
}

//Making game go to 5 rounds using loops

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Please select rock, paper or scissors.");
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(`Round ${i}: ${roundResult}`);
        if (roundResult.includes("tie")) {
            continue;
        } else if (roundResult.includes("win")) {
            playerScore++;
        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        return(`Well done! Player win ${playerScore}:${computerScore}`);
    } else if (playerScore < computerScore) {
        return(`Game over! Computer win ${playerScore}:${computerScore}`);
    }
}
console.log(game(playRound));