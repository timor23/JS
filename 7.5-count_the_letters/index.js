const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLetters(arr) {
    const lowerCased = arr.map(str => str.toLowerCase());
    // console.log(lowerCased);//temp
    return lowerCased
        .join("")
        .split("")
        .reduce(function (o, e) {
            return (o[e] = (o[e] || 0) + 1), o;
        }, {});
}


let r = countLetters(array);
console.log(r);