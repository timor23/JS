const candyStore = {
    candies: [
        { name: "mint gum", id: "as12f", price: 2, amount: 2 },
        { name: "twix", id: "5hd7y", price: 5, amount: 4 },
    ],
    cashRegister: 200,
};

function getCandy(candyStore, id) {
    return candyStore.candies.find((obj) => {
        return obj.id === id;
    });
}

function getPrice(candyStore, id) {
    return getCandy(candyStore,id).price;
}

function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({name: name, id: id, price: price, amount : 1});
}

function buy(candyStore, id) {
    let candy = getCandy(candyStore, id);
    candyStore.cashRegister -= getPrice(candyStore, id);
    getCandy(candyStore, id).amount --;
}


