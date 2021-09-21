function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter++;
        }
    }
    return counter;
}

let r = countOccurrences("ini mini miny moe", "i");
console.log(r);

// used debugger, found the bug, fixed it!!!