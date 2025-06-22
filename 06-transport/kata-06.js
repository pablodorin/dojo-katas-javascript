function transport(days){
    const price = 40; 
    let total = 0;

    total = days * price;

    if(days >= 3 && days < 7){
        total = total - 20;
    } 

    if(days >= 7){
        total = total - 50;
    }
    return total; 
}

module.exports = transport;

