const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];

// a1.
let sorted = [...foods];
sorted.sort();
// a2.
let sorted_r = [...foods];
sorted_r.sort().reverse();

console.log(sorted);
console.log(sorted_r);

sorted = [...foodsWithUpperCase];
sorted.sort();

console.log(sorted);
let a = 'a';
console.log((a.charCodeAt(0)-32).toString());