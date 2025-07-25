function digitize(num){
let number = 0; 
let arr = Array.from(String(num), Number);
arr = arr.reverse();
// number = Number(arr.join(''));
return arr;
}


module.exports = {digitize};