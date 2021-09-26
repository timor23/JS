const submit = document.querySelector(`.submit`),
    text = document.querySelector(`.text`),
    msg = document.querySelector(`.message`),
    heading = document.querySelector("h1")

text.addEventListener("keyup", ()=> {
    let ch = text.value.length;
    if (ch < 100) {
        msg.innerHTML = `${ch}/100 characters`;
        submit.setAttribute("disabled", null);
    } else if (ch >= 100) {
        msg.innerHTML = "";
        submit.removeAttribute("disabled");
    }
});
submit.addEventListener("click", ()=> {
    if (text.value.length === 0) {
        msg.innerHTML = `type something`;
    } else {
        text.style.display = `none`;
        submit.style.display = `none`;
        heading.innerHTML = `Thank you, we will get back to you if we like what you wrote;)`;
        heading.style.color = `blue`;
    }
});