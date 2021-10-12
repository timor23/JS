const board = document.querySelector(".grid");

const difficulty = [[4, 4], [6, 6], [8, 8]],
    cards = [],
    cardCover = `url("./img/covered.jpg")`;

let flippedCard = '',
    score = 0;

function createPicsArr(difficulty) {
    let numOfPics = (difficulty[0] * difficulty[1]) / 2;
    const pics = [];
    for (let i = 1; i <= numOfPics; i++) {
        pics.push(`./img/${i}.jpg`);
    }
    return pics;
}

function createGrid(difficulty, picsArr) {
    const dblArr = picsArr.concat(picsArr);
    // board.classList.add(`grid-template-columns: repeat(20, 1fr)`);
    let rows = difficulty[0], cols = difficulty[1];
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    for (let i = 1; i <= (rows * cols); i++) {
        // let row = Math.floor(i / cols);
        // let col = Math.floor(i % cols);
        let card = document.createElement("div");
        card.classList.add(`covered`);
        card.setAttribute("index", `${i}`);
        let index = Math.floor(Math.random() * dblArr.length);
        cards[i] = dblArr[index];

        dblArr.splice(index, 1);
        board.appendChild(card);
    }
    console.log(cards);
}

const pics = createPicsArr(difficulty[0]);
createGrid(difficulty[0], pics);

board.addEventListener("click", e => {
    let card = e.target;
    let idx = card.getAttribute("index");
    // console.log(cards[idx]);
    card.style.backgroundImage = `url(${cards[idx]})`;
    if (flippedCard) {
        setTimeout(() => {
            // if (cards[idx] === cards[flippedCard]) {
            let z = flippedCard.getAttribute("index");
            if (cards[idx] === cards[z]) {
                score++;
                flippedCard = '';
            } else {
                flipBackCard(card);
                flipBackCard(flippedCard);

                flippedCard = '';
            }
        }, 1000);
    } else {
        flippedCard = card;
    }
})

function flipBackCard(card) {
    card.style.backgroundImage = `${cardCover}`;
}
