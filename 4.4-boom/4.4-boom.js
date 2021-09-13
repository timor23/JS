function boom(n) {
    for (i = 1 ; i <= n ; i++) {
        if (i % 7 === 0) {
            i += '';
            if (i.includes('7')) {
                console.log(`BOOM-BOOM`);
            } else {
                console.log(`BOOM`);
            }
        } else {
            console.log(i);
        }
    }
}

// boom(18);