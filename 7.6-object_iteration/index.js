function swap(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[obj[key]] = key;
    }
    return newObj;
}

const me = { name: "Timor", age: 35, height: "179cm" };
let r = swap(me);
console.log(r);
