function simpleMultiplication(n){
    let result = 0; 

    if(n % 2 === 0){
        result = n * 8;
    } else {
        result = n * 9; 
    }

    return result;
}

module.exports = simpleMultiplication;