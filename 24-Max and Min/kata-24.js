function getMax(list){
   let highest = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] > highest) {
            highest = list[i];
        }
    }

    return highest;
}


function getMin(list){
      let lowest = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] < lowest) {
            lowest = list[i];
        }
    }

    return lowest;
}

module.exports = {getMax, getMin};