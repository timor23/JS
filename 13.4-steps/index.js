function steps(N) {
    for (let i = 0; i < N; i++) {
        let str = ``;
        for (let j = 0; j <= i; j++) {
            str += `#`;
        }
        console.log(str)
    }
}

steps(5);