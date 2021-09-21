function findSmallest(a, b, c){
    if (a >= c && b >= c){
        return c;
    } else if (b >= a && c >= a) {
        return a;
    } else {
        return b;
    }
}
let r = findSmallest(52,66, 2); //fixed function call name

console.log(r);
// 1. line 10: typo, line 2 and line 4  line 5
// 2. setting breakpoint and examining the code and the values step by step bla bla bla ...
// 3. "a > b > c" not correct way to compare more than two elements, line 5 wrong return
// 4. fixed above