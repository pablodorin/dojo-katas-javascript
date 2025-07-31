function reverseString(str){
    let aux = str.split('');
    let aux2 = [];

    for(let i = aux.length; i > 0; i--){
        aux2.push(aux[i-1]);
    }

    let string = aux2.join('');
    return string;

}

module.exports = reverseString;