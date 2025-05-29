function rps(player1, player2){
    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    let result ='';

    if(player1 === player2){
        result = 'Draw!';
    }
    

    if(result != 'Draw!'){
    result = rules[player1] === player2 ? "Player 1 won!" : "Player 2 won!";
    }
    return result;
}

module.exports = rps;