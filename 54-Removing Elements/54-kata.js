function removeEveryOther(arr){
let arrResult = [arr[0]];

for(let i = 2; i < arr.length; i+=2){
    arrResult.push(arr[i]);
}
return arrResult;
}


module.exports = removeEveryOther;