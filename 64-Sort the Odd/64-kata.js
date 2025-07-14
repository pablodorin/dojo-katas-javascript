function sortTheOdd(arr){
let arrResult = [];
let arrAux = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        arrAux.push(arr[i]);
    }
}
arrAux.sort((a, b) => a - b); 

let j = 0; 
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        arrResult.push(arrAux[j]);
        j++;
    }else{
    arrResult.push(arr[i]);
    }
}    

return arrResult;
}


module.exports = sortTheOdd;