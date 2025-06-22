function sumArray(arr){
    let ans = 0;
        for(let i = 0; i < arr.length; i++ ){
            ans = ans + arr[i];
        }

    return ans;
}

module.exports = sumArray;