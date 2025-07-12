function removeVowel(str){
    let vowels = 'aeiouAEIOU';
    let newStr = "";
    let arr = str.split('');

    for(let i = 0; i < arr.length; i++ ){
        if(vowels.includes(arr[i])){
            arr.splice(i, 1);
            i--;
        }
    }

    newStr = arr.join('');
    return newStr;
}


module.exports = removeVowel;