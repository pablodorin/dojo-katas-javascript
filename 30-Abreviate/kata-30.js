function abreviate(name){
    let nombres = name.split(' ');
    let first = nombres[0].split('');
    let second = nombres[1].split('');
    let initial1 = first[0];
    let initial2 = second[0];
    let abrev = initial1.toUpperCase() + '.' + initial2.toUpperCase();

    return abrev; 
}

module.exports = abreviate;