function sequenceSum(begin, end, step){
    let result = 0; 

    if(begin <= end){
        for(let i = begin ; i <= end; i += step ){
            result += i;
        }
    }   

    return result; 
}


module.exports = sequenceSum; 