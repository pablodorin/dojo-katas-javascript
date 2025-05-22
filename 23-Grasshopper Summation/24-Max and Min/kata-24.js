function getMax(numbers){
    let n = numbers[0]; 

    for(let i = 0; i < numbers.length; i++){
        if(n <= numbers[i]){
            n = numbers[i];
        }
    }
    return n; 
}


function getMin(numbers){
    let n = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        if(n >= numbers[i]){
            n = numbers[i];
        }
    }
    return n;
}

module.exports = {getMax, getMin};