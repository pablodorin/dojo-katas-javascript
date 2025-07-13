function isFactor(base, factor){
    let result = false; 
    let module = base % factor;

    if(module === 0){
        result = true;
    }

    return result;
}

module.exports = isFactor;