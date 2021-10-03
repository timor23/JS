// 1.
console.log(this);
/* this points to the global object, because it's used alone in the global scope */

//========================================================================
// 2.
// this refers to the global object because it's inside an arrow function which unlike
// regular function it doesn't bind it's own 'this', instead it inherit the one from the parent scope
// we can fix it by changing the greet to function expression as below
const myObj = {
    name: "Timmy",
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};

myObj.greet();

//========================================================================
// 3.
// it depends on how the function is called.. examples below
const myFuncDec = function () {
    console.log(this.name);
};

Object.prototype.name = "Bobo"; // added name property to the global object to see some result
myFuncDec(); // 'this' points to the global object since it's called from the global scope ==> Bobo


const example = { // created an object that includes the function
    a : myFuncDec,
    name: "Momo"
}
example.a(); // 'this' points to the 'example' object since it's it's the one calling the function ==> Momo

//========================================================================
// 4.
// same as calling console.log(this) from the global scope since it's an arrow function
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();

//========================================================================
// 5.
// `this` points to the window object, again because it's an arrow function
// we can fix it by changing it to regular function
document.querySelector(".element").addEventListener(`click`, function () {

    console.log(this);
});
