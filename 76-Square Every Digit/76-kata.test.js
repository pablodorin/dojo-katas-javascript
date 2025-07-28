const squareDigits = require('./76-kata.js'); // Asegurate de que el nombre coincida con tu archivo

test('should square and concatenate each digit of 9119', () => {
  expect(squareDigits(9119)).toBe(811181);
});

test('should square and concatenate each digit of 765', () => {
  expect(squareDigits(765)).toBe(493625);
});

test('should return 1 for input 1', () => {
  expect(squareDigits(1)).toBe(1);
});

test('should return 0 for input 0', () => {
  expect(squareDigits(0)).toBe(0);
});
