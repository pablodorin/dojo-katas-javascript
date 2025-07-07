function findNextSquare(n){
    let result = -1; 
    var root = Math.sqrt(n);
  

    if(Number.isInteger(root)){
        result = (root + 1)**2;
    }

    return result;
}


module.exports = findNextSquare;