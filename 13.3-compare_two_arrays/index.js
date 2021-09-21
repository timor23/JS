const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
    "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
    "Hamburgers"];

function compare(arr1, arr2) {
    let ret = [];
    for (let i = 0 ; i<arr1.length ; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                ret.push(arr1[i]);
            }
        }
    }
    if (ret.length === 0) {
        return false;
    } else return ret;
}

console.log(compare(food, food1));