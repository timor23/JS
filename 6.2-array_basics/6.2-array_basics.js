const people = ["Greg", "Mary", "Devon", "James"];

function printPeople(ppl) {
    ppl.forEach(element => {
        console.log(element);
    });
}

function printPeople2(ppl) {
    let i = 0;
    
    while(ppl[i] != "Mary") {
        console.log(ppl[i]);
        i++;
    }
    console.log(ppl[i]);
}
//.1
printPeople(people);
console.log(`=============`);
//.2
people.splice(people.indexOf("Greg"),1);
printPeople(people);
console.log(`=============`);
//.3
people.splice(people.indexOf("James"),1);
//.4
people.unshift("Matt");
//.5
people.push("Timor")
printPeople(people);
console.log(`=============`);
//.6
printPeople2(people);
console.log(`=============`);
//.7
let people2 = people.slice(2,people.length);
printPeople(people2);
//.8
indexOfMary = people.indexOf("Mary");
console.log(indexOfMary);
//.9
indexFoo = people.indexOf("Foo");
console.log(indexFoo);
//.10
printPeople(people);
console.log(`=============`);
people.shift(); // remove Matt
people.push("James"); // add James
people.splice(people.indexOf("Devon"), 2, "Elizabeth", "Artie"); //remove Devon & Timor, add Elizabeth & Artie
people.unshift("Greg");
printPeople(people);
console.log(`=============`);
//.11
let withBob = people.concat("Bob");
printPeople(withBob);

