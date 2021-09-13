function lengthOfStrings(arr) {
    let len = [];
    arr.forEach(element => {
        len.push(element.length);
    });
    return len;
}
let arr = ["boo", "doooo", "hoo", "ro"];
console.log(lengthOfStrings(arr));