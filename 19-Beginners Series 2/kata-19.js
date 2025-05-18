function sumNumbers(a,b){
    let result = 0; 
    let min = Math.min(a, b);
    let max = Math.max(a,b);

    for(let i = min; i <= max; i++){
        result += i;
    };

    if(a === b){
        result = a;
    }

    return result
}

module.exports = sumNumbers;