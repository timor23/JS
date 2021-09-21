function calcAverage (arr){
    let sum = 0;
    for  (let i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
let r = calcAverage  ([85, 90, 92]);
console.log(r);

// used debugger, found the bug, fixed it!!!