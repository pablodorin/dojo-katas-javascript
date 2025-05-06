function smallest(numbers){

    let smallest = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < smallest){
            smallest = numbers[i];
        }
    }

    return smallest;
}

module.exports = smallest;