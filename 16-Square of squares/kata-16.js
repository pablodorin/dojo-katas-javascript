function isSquare(n){
    let square = Math.sqrt(n);
    let result = square % 1 === 0; 
    return result;
}

module.exports = isSquare;