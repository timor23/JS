function greaterThanTen(n) {
    return new Promise(((resolve, reject) => {
        if (n > 10) {
            resolve(`${n} is greater than 10.`);
        } else if (n == 10){
            resolve(`${n} is equal than 10.`);
        } else {
            reject(`${n} is smaller than 10.`);
        }
    }))
}

greaterThanTen(5).then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
})