function binaryArrayToNumber(bin){
    let number = 0;    

    let binAux = bin.slice();
    binAux = binAux.reverse();

    for(let i = 0; i < binAux.length; i++){
        number += (binAux[i]) * (2 **i);
    }

    return number
}

module.exports = binaryArrayToNumber;