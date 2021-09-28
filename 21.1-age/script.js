const newDiv = document.createElement("div");
const container = document.querySelector("#container");
const submit = document.querySelector("#submit");
const input = document.querySelector("#input");

container.appendChild(newDiv);

submit.addEventListener(`click`, ()=> {

    if (isNaN(input.value)) {
        newDiv.innerHTML = `Enter a number`;

    } else {
        if (input.value < 18) {
            newDiv.innerHTML = "you're too young";
        } else {
            newDiv.innerHTML = "you can drink";
        }
    }
});