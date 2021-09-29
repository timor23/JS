const message = document.querySelector(".message");
const guessed = document.querySelector(".guessed");
const again = document.querySelector(".playAgain");
const confirm = document.querySelector(".confirm");

let letterToGuess = String.fromCharCode(97 + Math.floor(Math.random() * 26));
let gameInProgress = true;
again.style.display = "none";
message.style.color = "red";



document.addEventListener(`keydown`, (event) => {
    if (gameInProgress) {
        if ((event.key >= 'A' && event.key <= 'Z') || (event.key >= 'a' && event.key <= 'z')) {
            let letter = event.key.toLowerCase();
            if (letter === letterToGuess) {
                message.innerHTML = `Correct!, The letter is ${letter}`;
                message.style.color = "green";
                gameInProgress = false;
                again.style.display = "block";
            } else {
                if (guessed.innerHTML.includes(letter)) {
                    message.innerHTML = "letter already guessed";
                } else {
                    guessed.innerHTML += `,${letter}`;
                    message.innerHTML = "Nope, wrong letter";
                }
            }
        } else {
            message.innerHTML = "Letters only!";
        }
    }
})

confirm.addEventListener("click", () => {
    restartGame();
})

function restartGame() {
    again.style.display = "none";
    guessed.innerHTML = "";
    message.innerHTML = "";
    message.style.color = "red";
    letterToGuess = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    gameInProgress = true;
}
