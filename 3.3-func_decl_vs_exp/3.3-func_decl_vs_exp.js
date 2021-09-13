function percentageOfWorld1(countryName, countryPopulation) {
    const worldPopulation = 7900000000;
    let percentage = (countryPopulation / worldPopulation) * 100;
    return  `${countryName}'s population is ${percentage.toFixed(2)}% of the world population`;
}

let china = percentageOfWorld1('China', 1411000000);
let russia = percentageOfWorld1('Russia', 146171015);
let india = percentageOfWorld1('India', 1381793760);

console.log(china);
console.log(russia);
console.log(india);

let percentageOfWorld2 = function(countryName, countryPopulation) {
    const worldPopulation = 7900000000;
    let percentage = (countryPopulation / worldPopulation) * 100;
    return  `${countryName}'s population is ${percentage.toFixed(2)}% of the world population`;
}

let japan = percentageOfWorld2('Japan', 125300000);
let brazil = percentageOfWorld2('Brazil', 125300000);
let usa = percentageOfWorld2('United States', 332350695);

console.log(japan);
console.log(brazil);
console.log(usa);