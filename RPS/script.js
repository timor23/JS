const computerChoice = document.querySelector("#computer-choice"),
    rock = document.querySelector(".rock"),
    paper = document.querySelector(".paper"),
    scissors = document.querySelector(".scissors"),
    score = document.querySelector(".score");

const showRock = `url("./img/rock.png")`,
    showPaper = `url("./img/paper.png")`,
    showScissors = `url("./img/scissors.png")`;

const choices = [`rock`, `paper`, `scissors`];

let myScore = 0, computerScore = 0;

updateScore();

function showComputerHand(computerHand) {
    switch (computerHand) {
        case `rock`:
            computerChoice.style.backgroundImage = showRock;
            break;
        case `paper`:
            computerChoice.style.backgroundImage = showPaper;
            break;
        case `scissors`:
            computerChoice.style.backgroundImage = showScissors;
            break;
    }
}

function updateScore() {
    score.innerHTML = `${myScore} - ${computerScore}`;
}

function check(myHand) {
    let computerHand = choices[Math.floor(Math.random() * 3)];
    showComputerHand(computerHand);
    if (myHand == computerHand) {
        return;
    }
    switch (myHand) {
        case `rock`:
            if (computerHand === `scissors`) {
                myScore++
            } else {
                computerScore++;
            }
            break;
        case `paper`:
            if (computerHand === `rock`) {
                myScore++
            } else {
                computerScore++;
            }
            break;
        case `scissors`:
            if (computerHand === `paper`) {
                myScore++
            } else {
                computerScore++;
            }
            break;
    }
    updateScore();
}

rock.addEventListener(`click`, () => check(`rock`));
paper.addEventListener(`click`, () => check(`paper`));
scissors.addEventListener(`click`, () => check(`scissors`));