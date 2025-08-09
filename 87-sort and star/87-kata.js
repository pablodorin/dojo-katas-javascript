function orderABC(arr){
     let sorted = arr.sort();
    let  first = sorted[0];
    let  result = first.split('').join('***');
    return result;
}

module.exports = orderABC;