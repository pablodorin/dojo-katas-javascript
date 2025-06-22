function reverseDigits(int){

    const numbers = int.toString().split('');
    const reverse = numbers.reverse();
    const newNumber = reverse.map(function(digit) {return Number(digit);});

    return newNumber;
}

module.exports = reverseDigits;