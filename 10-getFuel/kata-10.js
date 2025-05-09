function getFuel(gallons, miles ){
    const milesXGallon = 25;
    let totalMiles = gallons * milesXGallon;
    let result = false;

    if(totalMiles >= miles){
        result = true;
    } 

    return result;
}

module.exports = getFuel;