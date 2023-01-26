const options = ["Rock", "Paper", "Scissors"];

//Making a function that plays round of rock paper scissors
function playRound(playerSelection) {
    const computerSelection = options[Math.floor(Math.random() * options.length)];
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
            playerSelection === "Scissors" && computerSelection === "Paper" ||
            playerSelection === "Paper" && computerSelection === "Rock") {
        return "You won! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}
const playerSelection = prompt("Please select rock, paper or scissors.")
console.log(playRound(playerSelection));
