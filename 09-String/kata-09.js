function noSpaceStr(str){

    let noSpaceStr = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            noSpaceStr += str[i];
        }
    }
    return noSpaceStr;
}

module.exports = noSpaceStr;