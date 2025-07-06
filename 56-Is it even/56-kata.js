function isEven(n){
    let result; 


    if (Number.isInteger(n) && n % 2 === 0){
        result = true; 
    } else {
        result = false;
    }

    return result;
}


module.exports = isEven;