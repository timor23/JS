const arr = [1, 7, 3, 0, -5, 7, 3, 9];

function printArray(arr) {
    for (let i = 0 ; i < arr.length ; i++) {
        console.log(arr[i]);
    }
}

function arrayLength(arr) {
    let lengh = 0;
    arr.forEach(element => {
        lengh++;
    });
    return lengh;
}

function arraySum(arr) {
    let sum = 0;
    arr.forEach(val => {
        sum += val;
    });
    return sum;
}

function arrayMulti(arr) {
    let mul = 1;
    arr.forEach(val => {
        mul *= val;
    });
    return mul;
}

printArray(arr);
console.log(`Array arr[] length is ${arrayLength(arr)}`);
console.log(`Array arr[] elements sum is ${arraySum(arr)}`);
console.log(`Array arr[] elements multipication is ${arrayMulti(arr)}`);
