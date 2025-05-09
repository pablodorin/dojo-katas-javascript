function exes(str){
    let result = false; 
    let counterO = 0; 
    let counterX = 0;

    let strAux = str.toLowerCase();
    for (let i = 0; i < strAux.length; i++){
        if(strAux[i] === 'x' ){
            counterX++;
        }

        if(strAux[i] === 'o'){
            counterO++;
        }
    }

    if(counterO === counterX || (counterO === 0 && counterX === 0)){
        result = true; 
    }

    return result;
}

module.exports = exes;