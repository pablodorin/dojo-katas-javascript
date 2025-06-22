const rps = require('./kata-33.js'); // Asegurate de que tu función esté exportada desde 'rps.js'

test('Player 1 wins', () => {
  expect(rps("scissors", "paper")).toBe("Player 1 won!");
  expect(rps("rock", "scissors")).toBe("Player 1 won!");
  expect(rps("paper", "rock")).toBe("Player 1 won!");
});

test('Player 2 wins', () => {
  expect(rps("scissors", "rock")).toBe("Player 2 won!");
  expect(rps("rock", "paper")).toBe("Player 2 won!");
  expect(rps("paper", "scissors")).toBe("Player 2 won!");
});

test('Draws', () => {
  expect(rps("scissors", "scissors")).toBe("Draw!");
  expect(rps("rock", "rock")).toBe("Draw!");
  expect(rps("paper", "paper")).toBe("Draw!");
});
