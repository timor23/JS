const wordsArr = ["sound", "week", "minute", "fan", "explode"];
const wordsArr2 = ["pray", "flower", "duty", "wound", 88];

function makeAllCaps(words) {
    return new Promise(((resolve, reject) => {
        if (words.every((word) => typeof word === 'string')) {
            resolve(words.map((word) => word.toUpperCase()));
        } else {
            reject("The array contains one or more none string elements!");
        }
    })).then((words) => sortWords(words));
}

function sortWords(words) {
    return words.sort();
}

makeAllCaps(wordsArr).then((request) => {
    console.log(request)
}).catch((err) => {
    console.log(err)
});

makeAllCaps(wordsArr2).then((request) => {
    console.log(request)
}).catch((err) => {
    console.log(err)
});