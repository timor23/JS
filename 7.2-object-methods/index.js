const mycountry = {
    country: `Finland`,
    capital: `Helsinki`,
    language: "Finnish / Swedish",
    population: `5536000`,
    neighbours: [`Norway`, `Russia`, `Sweden`],
    describe: function () {
        return `${this.country} has about ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;

    },
    checkIsland: function() {
        return this.isIsland = (this.neighbours.length === 0) ? true : false;
    }
};

console.log(mycountry.describe());
console.log(mycountry.checkIsland());