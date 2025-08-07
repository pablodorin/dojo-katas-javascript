// function detectPangram(str){
//     let strAux = str.toLowerCase();
//     let aux = strAux.split('');
//     let result = true;
//     const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');

//     for(let i = 0; i < aux.length; i++){
//         if(!abc.includes(aux[i])){
//             result = false;
//         }
//     }

//     return result; 
// }


// module.exports = detectPangram;

function detectPangram(str) {
    let result = true;
    let strAux = str.toLowerCase();
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let letra of abc) {
        if (!strAux.includes(letra)) {
            result = false;
        }
    }
    return result;
}

module.exports = detectPangram;