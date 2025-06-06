function jadenize(str){
    let words = str.split(" ");
    let jadenized = [];

    for(let i = 0; i < words.length; i++){
        let word = words[i];
        word = word.charAt(0).toUpperCase() + word.slice(1);
        jadenized.push(word);
    }

    jadenized = jadenized.join(" ");

    return jadenized; 
}

module.exports = jadenize;