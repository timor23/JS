const storm = {
    superPower: "mind control",
    myPower: printSuperPower
}
function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.myPower();