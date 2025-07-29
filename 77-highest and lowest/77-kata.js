function highAndLow(str){
     
    let arrAux1 = str.split(' ').map(Number);
    let max = Math.max(...arrAux1);
    let min = Math.min(...arrAux1);

    let string = max + " " + min;

    return string;
}
module.exports = highAndLow;