async function asyncCall() {
    try {
        const foodIDs = await getIDs();
        console.log(foodIDs);
        const myfoodID = await getRecipe(foodIDs[2])
        console.log(myfoodID);
    } catch (err) {
        console.log(err);
    }
}

asyncCall()