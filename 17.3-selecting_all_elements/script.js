const allDivs = document.querySelectorAll('div');

const divsArr = Array.from(allDivs);
const colors = ["blue", "red", "green", "yellow"];
divsArr.forEach((div, index)=> {
    div.style.height = `100px`;
    div.style.width = `300px`;
    div.style.background = colors[index];
})
divsArr[0].innerHTML = 'Blue';
