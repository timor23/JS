function avgJumper(arr) {
    let avgJumperArr = [];
    numOfJumpers = arr.length / 3;
    arr.forEach(element => {    // git rid of negative score
        if (arr[element] < 0) {
            arr[element] = 0;
        }
    });

    for (let i = 0 ; i < arr.length ; i+=3) {
        let avg = (arr[i] + arr[i+1] + arr[i+2]) / 3;
        avgJumperArr.push(avg);
    }
    return avgJumperArr;
}

function bestAvgJump(arr) {
    return returnMax(avgJumper(arr));
}

function bestJump(arr) {
    return returnMax(arr);
}

function returnMax (arr) {
    let max = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;    
}

let jumps = [5, 5, 8, 7, 7, 1, 3, 3, -1];

let a = avgJumper(jumps);
let b = bestAvgJump(jumps);
let c = bestJump(jumps);
console.log(a);
console.log(b);
console.log(c);