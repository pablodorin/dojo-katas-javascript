function rps(player1, player2){
    let result ='';

    if(player1 === player2){
        result = 'Draw!';
    }
    
    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };
    
    if(result != 'Draw!'){
    result = rules[player1] === player2 ? "Player 1 won!" : "Player 2 won!";
    }
    return result;
}

module.exports = rps;