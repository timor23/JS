const numbers = [1, -5, 666, 2, 400, 11];

const numberSorter = (a, b) => a - b;

// 1.
numbers.sort((a, b) => a - b); 
console.log(numbers);
// 2.
numbers.sort((a, b) => b - a);
console.log(numbers);