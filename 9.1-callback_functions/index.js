function isString(str, func) {
    if (typeof(str) === `string`) func(str);
}

function printStr(str) {
    console.log(str);
}

function checkLength(str) {
    console.log(str.length);
}

isString("Hello And Welcome", printStr);
isString("Hello And Welcome", checkLength);