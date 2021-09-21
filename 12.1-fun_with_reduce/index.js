const arr = [6, 12, 4, 55, 6, -31, 13, 2, 32, 10]

function max(arr) {
    return arr.reduce((a, b) => {
        if (a>b) {
            return a;
        } else return b;
    })
}

function sumOfEven(arr) {
    let sum = arr.reduce((total, curr) => {
        if (curr % 2 === 0) {
            return total + curr;
        } else return total;
    }, 0);
    return sum;
}

function avg(arr) {
    let sum = arr.reduce((total, curr) => {
        return total + curr;
    });
    return sum / arr.length;
}

console.log(max(arr));
console.log(sumOfEven(arr));
console.log(avg(arr));
