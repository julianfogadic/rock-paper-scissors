const options = ["Kamen", "Skare", "Papir"];

function random() {
    const izbor = options[Math.floor(Math.random() * options.length)];
    return izbor;
};

function pobjednik(izborKorisnik, izborRacunalo) {
    if (izborKorisnik == izborRacunalo) {
        return "Izjednaceno!";
    }
    else if (
        (izborKorisnik == "Kamen" && izborRacunalo == "Skare") ||
        (izborKorisnik == "Skare" && izborRacunalo == "Papir") ||
        (izborKorisnik == "Papir" && izborRacunalo == "Kamen")) {
        return "Korisnik";
    }
    else {
        return "Racunalo";
    }
};
document.getElementById("racunalo-image").style.display = "none";
document.getElementById("pobjednik-img").style.display = "none";

const izborKorisnikEl = document.getElementById("igra");
const submitBtn = document.getElementById("submitBtn");
const bacanjeEl = document.querySelector("#bacanje");
const pobjednikEl = document.getElementById("pobjednik")
const imgEl = document.getElementById("slike");

document.getElementById("submitBtn").innerHTML = "Igraj";

let userWins = 0;
let computerWins = 0;
let round = 1;

izborKorisnikEl.addEventListener("change", function () {
    const selectedValue = izborKorisnikEl.value;
    if (selectedValue === "Kamen") {
        imgEl.src = "kamen.png";
    } else if (selectedValue === "Skare") {
        imgEl.src = "skare.png";
    } else if (selectedValue === "Papir") {
        imgEl.src = "papir.png"
    }
});

const izborRacunalo = random();
bacanjeEl.textContent = `Racunalo baca: ${izborRacunalo}`;
const racunaloImageEl = document.getElementById("racunalo-image");
const pobjednikImageEl = document.getElementById("pobjednik-img");

submitBtn.addEventListener("click", function () {
    const izborKorisnik = izborKorisnikEl.value;
    const izborRacunalo = random();
    racunaloImageEl.style.display = "block";
    bacanjeEl.textContent = `Racunalo: ${izborRacunalo}`;
    
    if (izborRacunalo === "Kamen") {
        racunaloImageEl.src = "kamen.png";
    } else if (izborRacunalo === "Skare") {
        racunaloImageEl.src = "skare.png";
    } else if (izborRacunalo === "Papir") {
        racunaloImageEl.src = "papir.png";
    }

    pobjednikEl.textContent = `Pobjednik: ${pobjednik(izborKorisnik, izborRacunalo)}`;
    if (pobjednik === "Korisnik") {
        pobjednikImageEl.src = "user.png";
    } else if (pobjednik === "Racunalo") {
        pobjednikImageEl.src = "computer.jpg";
    }

    pobjednikImageEl.style.display = "block";

    numRounds++;
    const winner = pobjednik(izborKorisnik, izborRacunalo);
    if (winner === "Korisnik") {
        userWins++;
    } else if (winner === "Racunalo") {
        computerWins++;
    }
    const rundaEl = document.getElementById("runda");
    rundaEl.textContent = `Runda ${numRounds}: ${winner} wins!`;

    if (numRounds === 3) {
        // Display the winner of the game
        let gameWinner;
        if (userScore > computerScore) {
            gameWinner = "Korisnik";
        } else if (computerScore > userScore) {
            gameWinner = "Racunalo";
        } else {
            gameWinner = "Nerijeseno";
        }
        pobjednikEl.textContent = `Game over! ${gameWinner} wins the game!`;

        // Disable the submit button
        submitBtn.disabled = true;
    }

});

let selectElement = document.getElementById("igra");
selectElement.value = izborKorisnikEl;

