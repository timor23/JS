// function nextBigger(n) {
//     let digits = [];
//     let results = [];
//     while (n) {
//         let last = n % 10;
//         digits.unshift(last);
//         n = Math.floor(n / 10);
//     }

//     for (let i = digits.length - 1 ; i >= 0 ; i--) {
//         for(let j = i-1 ; j >= 0 ; j--) {
//             if (digits[j] < digits[i]) {
//                 let newArr = [...digits];
//                 let temp = newArr[j];
//                 newArr[j] = newArr[i];
//                 newArr[i] = temp;
//                 let res = arrToNum(newArr);
//                 results.push(res);
//                 results.push(nextBigger(res));
//             }
//         }
//     }
//     return Math.min.apply(null, results);
// }

function arrToNum(arr) {
    let num = 0;
    for (let i = 0 ; i < arr.length ; i++) {
        num = num * 10 + arr[i];
    }
    return num;
}

let r = nextBigger(362);
console.log(r);

// 1. convert input to string
// 2.  order input string in decreasing to determind max possible value
// 3. increment the value passed in by each time through a loop noting if digits match with input and exit 
//    loop with current value of num
// 4. if done with the loop return -1

function nextBigger(n) {
    let strNum = n + ``;
    strNum = strNum.split("").sort().reverse().join("");
    console.log(strNum);///temp
}