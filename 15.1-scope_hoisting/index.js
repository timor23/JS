// Block 1
function funcA() {
    console.log(a); // undefined
    console.log(foo()); // 2
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();
// var a = 1  must come before we try to access it's value

//Block 2
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName()); // Aurelio De Rosa
var test = obj.prop.getFullName();
console.log(test);

//Block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);


// Block 4
function funcC() {
    console.log("1");
}
funcC(); // 2
function funcC() {
    console.log("2");
}
funcC(); // 2

//Block 5
function funcD1() {
    d = 1;
}
funcD1(); //1
console.log(d);
function funcD2() {
     e = 1;
}
funcD2();
console.log(e);