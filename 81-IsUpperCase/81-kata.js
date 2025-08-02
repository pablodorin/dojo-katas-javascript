function isUpperCase(str) {
    let i = 0; 
    let result = true;
    let aux = str.split('');

    while (i < aux.length && result) {
        let char = aux[i];
        if (char.toLowerCase() !== char.toUpperCase() && char === char.toLowerCase()) {
            result = false;
        }
        i++; 
    }

    return result;
}




module.exports = isUpperCase;