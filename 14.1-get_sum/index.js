function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
    return sum;
}
console.log(getSum([1,2,3], [5,66,23]));

//1. line 2: sum shouldn't be const,
//   line 10: ([1,2,3],[5,66,23])
//2. ...... I used something called "Debugger" :)
// I don't like this kind of questions ... I know how to debug and that's it
//4. code fixed