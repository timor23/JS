let person = { name: "Timor", age: 35, height: "179cm" }; //that's me
function isItAnArray(arr) {
    if (Array.isArray(arr)) {
        return `it's an array`;
    } else return `it's not an array`;
}
//.1
let arr = new Array(100);
arr.fill(person);

//.2
let arr2 = Array.from({length: 100}, (_, i) => i + 1);

//.5
let arr3 = [111,222,333]
let arr4 = 456;

console.log(isItAnArray(arr3));
console.log(isItAnArray(arr4));
console.log(isItAnArray(person));

//.6.1
let arr5 = arr3.slice();
arr5[0] = 999;
console.log(arr3);
console.log(arr5);
//.6.2
let arr6 = arr3;
arr6[1] = 000;
console.log(arr3);
console.log(arr6);