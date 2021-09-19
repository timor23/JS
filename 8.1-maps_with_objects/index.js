obj1 =  {name: `Object1`};
obj2 =  {name: `Object2`};
obj3 =  {name: `Object3`};

let mapObj = new Map();

mapObj.set(obj1, 111);
mapObj.set(obj2, 222);
mapObj.set(obj3, 333);

console.log(mapObj);

for (let [key, value] of mapObj) {
    console.log(`${key.name}: ${value}`);
}