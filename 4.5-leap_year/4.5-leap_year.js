function isLeapYear(year) {
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(1);
    date.setDate(29);
    if (date.getMonth() === 1) {
        console.log(`It is indeed a leap year`);
    } else  {
        console.log(`This is not a leap year`);
    }
}

isLeapYear(2021);