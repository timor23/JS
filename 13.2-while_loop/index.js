function lengthOfStrings(arr) {
    let len = [];
    let i =0;
    while (i < arr.length) {
        len.push(arr[i].length);
        i++;
    }
    return len;
}
let arr = ["boo", "doooo", "hoo", "ro"];
console.log(lengthOfStrings(arr));