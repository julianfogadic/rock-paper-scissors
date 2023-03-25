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

let round = 1;
let userWins = 0;
let computerWins = 0;

submitBtn.addEventListener("click", function () {
    if (userWins < 3 && computerWins < 3) {
        const izborKorisnik = izborKorisnikEl.value;
        const izborRacunalo = random();
        const racunaloImageEl = document.getElementById("racunalo-image");
        const pobjednikImageEl = document.getElementById("pobjednik-img");
        racunaloImageEl.style.display = "block";
        bacanjeEl.textContent = `${izborRacunalo}`;

        if (izborRacunalo === "Kamen") {
            racunaloImageEl.src = "kamen.png";
        } else if (izborRacunalo === "Skare") {
            racunaloImageEl.src = "skare.png";
        } else if (izborRacunalo === "Papir") {
            racunaloImageEl.src = "papir.png";
        }

        let winner = pobjednik(izborKorisnik, izborRacunalo);
        pobjednikImageEl.style.display = "block";
        pobjednikEl.textContent = `Pobjednik: ${winner}`;

        if (winner === "Korisnik") {
            pobjednikImageEl.src = "user.png";
            userWins++;
        } else if (winner === "Racunalo") {
            pobjednikImageEl.src = "computer.jpg";
            computerWins++;
        } else {
            pobjednikImageEl.src = "tie.gif";
        }

        const rezultatEl = document.getElementById("rezultat");
        rezultatEl.innerHTML += `<br>Round ${round}: Korisnik - Racunalo  ${userWins}:${computerWins}`;

        round++;
        if (userWins === 3 || computerWins === 3) {
            submitBtn.disabled = true;
            pobjednikEl.textContent = (userWins === 3) ? "Bravo! Pobijedio si! :)" : "Nazalost, izgubio si :(";
            pobjednikImageEl.src = (userWins === 3) ? "user.png" : "computer.jpg";
        }
    }
});