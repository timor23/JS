const newDiv = document.createElement("div");
const container = document.querySelector("#container");
const submit = document.querySelector("#submit");
const input = document.querySelector("#input");
newDiv.style.display = 'flex';
newDiv.style.color = `red`;

container.appendChild(newDiv);

function addSmiley() {
    let smiley = document.createElement("div");
    smiley.style.backgroundImage = `url("./smileyfaceemoji1508a.jpg")`;
    smiley.style.backgroundsize = 'cover';
    smiley.style.backgroundRepeat = `no-repeat`;
    smiley.style.backgroundPosition = `center`;
    smiley.style.width = "150px";
    smiley.style.height = "150px";
    newDiv.appendChild((smiley));
}

submit.addEventListener(`click`, ()=> {
    while (newDiv.firstChild) { // clear previous
        newDiv.removeChild(newDiv.lastChild);
    }
    if (isNaN(input.value)) {
        newDiv.innerHTML = `Enter a number`;
    }
    for (let i = 0; i < input.value; i++) {
        addSmiley();
    }
});

