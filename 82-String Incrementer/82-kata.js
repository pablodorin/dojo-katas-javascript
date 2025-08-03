function incrementString(strng) {
    let aux = strng.split('');
    let letra = '';
    let numero = '';
    let resultado = '';

    for (let i = 0; i < aux.length; i++) {
        let char = aux[i];
        if (char >= '0' && char <= '9') {
            numero += char;
        } else {
            letra += numero + char;
            numero = '';
        }
    }

    // Si todo eran letras, agrega 1
    if (numero === '' && letra.length === strng.length) {
        resultado = strng + '1';
    } else {
        let numFinal = numero === '' ? 0 : Number(numero);
        numFinal += 1;

        let ceros = numero.length - String(numFinal).length;
        if (ceros < 0) ceros = 0;

        resultado = letra + '0'.repeat(ceros) + numFinal;
    }

    return resultado;
}

module.exports = incrementString;