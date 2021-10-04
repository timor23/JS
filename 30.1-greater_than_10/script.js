function greaterThanTen(n) {
    return new Promise(((resolve, reject) => {
        if (n > 10) {
            resolve(`${n} is greater than 10.`)
        } else {
            reject(`${n} is not greater than 10.`)
        }
    }))
}

greaterThanTen(5).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})