function getBanjoPlayer(name){
    let answer = name +" does not play banjo";
    let first = name[0].toLowerCase();

    if(first === 'r'){
        answer = name + " plays banjo";
    }
    return answer
}

module.exports = getBanjoPlayer;