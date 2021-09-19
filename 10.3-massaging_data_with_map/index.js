const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

//1.
function getNames(data) {
    return data.map(element => element.name);
}

//2.
function bornBefore90s(data) {
    return data.filter(element => {
        let dob = element.birthday.split("-");
        if (dob[2] < 1990) return element
    })
}

//3.
function ggg(data) {
    let ret = new Map;
    let det = data.map(element => {
        return element.favoriteFoods.meats.concat(element.favoriteFoods.fish) ;
    })
    det = [].concat.apply([], det);
    console.log(det);
    return det.reduce((obj, e) => {
        obj[e] = (obj[e] || 0) + 1;
        return obj;
    }, {});
}
console.log(ggg(data));
