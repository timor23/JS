//1.
const listItem = document.querySelector(".start-here");
listItem.innerHTML = "main title";

//2.
const newSub = document.createElement("li");
newSub.innerHTML = "sub title 4";
listItem.nextElementSibling.firstElementChild.appendChild(newSub);

//3.
const uList = listItem.parentElement;
uList.removeChild(uList.lastElementChild);

//4.
document.querySelector('title').textContent = "Master Of The Dom";

//5.
uList.nextElementSibling.firstElementChild.innerHTML = "GoodBye World!, Hello .... something else"