const obj = {
    name: "Jakooz",
    printName: function () {
        console.log(this.name);
    },
    printNameWithDelay: function () {
        setTimeout(function () {
                console.log(this.name);
            }.bind(this),1000);
    },
};

obj.printName();
obj.printNameWithDelay();
