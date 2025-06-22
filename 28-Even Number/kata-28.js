function isEven(n){
    let answer = "Odd";
    if(n % 2 === 0){
        answer = 'Even'
    }
    return answer;
}

module.exports = isEven; 