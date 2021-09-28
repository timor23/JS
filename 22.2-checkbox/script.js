const image = document.querySelector("img");
const checkBox = document.querySelector(".show");

image.style.display = "none"

checkBox.addEventListener("click", ()=> {
    if (checkBox.checked) {
        image.style.display = "block";
    } else image.style.display = "none";
})