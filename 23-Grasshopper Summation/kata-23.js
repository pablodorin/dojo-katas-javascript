function summation(n){

    let summation = 0; 

    for(let i = 0; i <= n; i++){
        summation = summation + i;
    }
    return summation;
}

module.exports = summation;