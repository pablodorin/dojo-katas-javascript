function getRNA(ADN){

    let RNA = ADN.split('');
    for(let i = 0; i < RNA.length; i++ ){
        if(RNA[i] === 'T'){
            RNA[i] = 'U';
        }
    }
    RNA = RNA.join(''); 

    return RNA;
}

module.exports = getRNA;