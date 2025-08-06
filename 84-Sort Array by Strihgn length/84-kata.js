function sortByLength(arr){
    let result = arr.sort((a, b) => a.length - b.length);
    return result;
}   

module.exports = sortByLength;

