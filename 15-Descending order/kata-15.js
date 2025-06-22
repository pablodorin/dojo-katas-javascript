function descendingOrder(n){
    let stringNumber = n.toString();

    let digits = [];

    for(let i = 0; i <stringNumber.length; i++) {
        digits.push(Number(stringNumber[i]));
    }

    for(let i = 0; i < digits.length; i++){
        for(let j = 0; j < digits.length; j++){
            if(digits[j] < digits[i]){
                let temp = digits[i];
                digits[i] = digits[j];
                digits[j] = temp;
            }
        }
    }

    let orderedString = "";
    for(let i = 0; i < digits.length; i++){
        orderedString += digits[i];
    }

    return parseInt(orderedString);
}

module.exports = descendingOrder; 