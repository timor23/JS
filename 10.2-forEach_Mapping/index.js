function doubleValues(arr) {
    return arr.map(val =>{
        return val * 2;
    });
}

function onlyEvenValues(arr) {
    return arr.filter(val =>{
        return val % 2 == 0;
    })
}

function showFirstAndLast(arr) {
    let ret = [];
    let newArr = arr.filter(val =>{
        return typeof(val) === `string`;
    })
    ret.push(newArr[0], newArr[newArr.length -1]);
    return ret;
}

const arr = [3, 2, `666`, 11, 3, 'BOOM', 'coffee', 1, -1, 12];
console.log(doubleValues(arr));
console.log(onlyEvenValues(arr));
console.log(showFirstAndLast(arr));

function vowelCount(str) {
    str = str.toLowerCase();
    str = str.replace(/[bcdfghjklmnpqrstvwxyz ]/gi, ""); 
    console.log(str);//temp
    return str.split("").reduce(function (o, e) {
        return (o[e] = (o[e] || 0) + 1), o;
    }, {});
}

console.log(vowelCount(`We use cookies to ENSURE you have the best browsing experience on our website`)
);

function capitalize(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
}


console.log(capitalize(`kilo one two seven`));

