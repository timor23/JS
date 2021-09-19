function isString(str, func) {
    if (typeof(str) === `string`) func(str);
}

function printStr(str) {
    console.log(str);
}


function firstWordUpperCase(str, func) {
    str = str.split(' ');
    str[0] = str[0].toUpperCase();
    return func(str);
}

function addDashes(arr) {
    return arr.join(`-`);
}

function checkLength(str) {
    return str.join(" ").length;
}

isString("Hello And Welcome", printStr);

let r = firstWordUpperCase("Hello And Welcome", addDashes);
console.log(r);

let s = firstWordUpperCase("Hello And Welcome", checkLength);
console.log(s);