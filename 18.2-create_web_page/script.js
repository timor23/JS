const colors = ['blue', 'red', 'yellow', 'green', 'white', 'gray', 'black', 'pink', 'purple', 'orange'];
const heading = document.querySelector('#heading1');
const btn = document.querySelector('#button1');
heading.textContent = "Click on me to change color";
heading.addEventListener('click', handleEvent);
btn.addEventListener('click', handleEvent);

function handleEvent(event) {
    if(event.target.id == 'button1') {
        let selection = document.querySelectorAll('p');
        selection.forEach(function(param) {
            param.remove();
        });
        heading.style.color = 'black';
    }
    if (event.target.id == 'heading1') {
        let newColor = chooseColor(colors);
        heading.style.color = newColor;
        let p1 = document.createElement('p');
        p1.textContent = "The color is " + newColor;
        document.querySelector('body').appendChild(p1);
    }
}

function chooseColor(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
//==================================================

