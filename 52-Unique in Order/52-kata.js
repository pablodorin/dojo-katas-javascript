function uniqueInOrder(args){
    let result = []; 
    if (args.length === 0) return result;

    result.push(args[0]);

    for (let i = 1; i < args.length; i++){
        let aux = result[result.length -1];
        if(args[i] != aux){
            result.push(args[i]);
        }
    }

    return result; 
}


module.exports = uniqueInOrder; 