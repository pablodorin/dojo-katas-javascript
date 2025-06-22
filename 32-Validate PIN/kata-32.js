function validatePIN(num){
    let ans = false;
    let numbers = num.split('');

    if((numbers.length == 4 || numbers.length == 6) && !isNaN(num)){
        ans = true;
    }

    return ans;
}

module.exports = validatePIN;