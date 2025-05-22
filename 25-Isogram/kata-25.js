function isIsogram(word){
  let result = true;
    let aux = word.toLowerCase();
    const letras = aux.split('');
    let i = 0;

    while (i < letras.length && result) {
        let j = i + 1;
        while (j < letras.length && result) {
            if (letras[i] === letras[j]) {
                result = false;
            }
            j++;
        }
        i++;
    }
    return result;
}

module.exports = isIsogram;