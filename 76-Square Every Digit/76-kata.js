function squareEveryNumber(num){
    let aux = []; 
    let number = 0
    let arr = num.toString().split('').map(Number);
    for(let i = 0; i < arr.length ; i++){
        aux.push(arr[i]**2);
    }
    number = Number(aux.join(''));
    return number; 
}


module.exports = squareEveryNumber;