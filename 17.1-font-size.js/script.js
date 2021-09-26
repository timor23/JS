const increase = document.querySelector(`#inc`),
    decrease = document.querySelector(`#dec`),
    text = document.querySelector(`.txt`);

let size = 50;
text.style.fontSize = size + `px`;

increase.addEventListener(`click`, () => {
    sizeUpDown(`up`);
});

decrease.addEventListener(`click`, () => {
    sizeUpDown(`down`);
});

function sizeUpDown(action) {
    if (action === 'up' && size < 100) {
        size++;
    }
    else if(action ==="down" && size > 6){
        size--;
    }
    text.style.fontSize = size + 'px';
}

///////////////////////////////////////////////////
