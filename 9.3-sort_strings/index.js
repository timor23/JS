const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foodsWithUpperCase = ["falafel", "Sabich", "Hummus", "pizza with extra pineapple"];
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

// a1.
let sorted = [...foods];
sorted.sort();
// a2.
let sorted_r = [...foods];
sorted_r.sort().reverse();

console.log(sorted);
console.log(sorted_r);

//b1.
sorted = [...foodsWithUpperCase];
sorted.sort(function (a, b) {
    return a.toUpperCase().localeCompare(b.toLowerCase());
});

console.log(sorted);
console.log(sorted_r);
//b2.
sorted_r = [...foodsWithUpperCase];
sorted_r.sort(function (a, b) {
    return b.toUpperCase().localeCompare(a.toLowerCase());
});


console.log(sorted);
console.log(sorted_r);
 //c.
let sortedByLength = [...words];
sortedByLength.sort(function (a, b) {
    return b.length - a.length;
});

console.log(sortedByLength);