function listFilter(list){
    let listFiltered = [];

    for(let i = 0; i < list.length; i++){
        // let auxInt = parseInt(list[i]);
        // if(!isNaN(auxInt)){
        //     listFiltered.push(auxInt);
        // }

        if(typeof list[i] === 'number'){
            listFiltered.push(list[i]);
        }
    }

    return listFiltered;
}

module.exports = listFilter;