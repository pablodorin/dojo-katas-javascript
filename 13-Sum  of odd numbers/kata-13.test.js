const sumOddNumbers = require('./kata-13'); // Asegurate de que el archivo se llame sumOddNumbers.js

describe('sumOddNumbers', () => {
  test('returns 1 for n = 1', () => {
    expect(sumOddNumbers(1)).toBe(1);
  });

  test('returns 8 for n = 2', () => {
    expect(sumOddNumbers(2)).toBe(8);
  });

  test('returns 27 for n = 3', () => {
    expect(sumOddNumbers(3)).toBe(27);
  });

  test('returns 64 for n = 4', () => {
    expect(sumOddNumbers(4)).toBe(64);
  });

  test('returns 125 for n = 5', () => {
    expect(sumOddNumbers(5)).toBe(125);
  });

  test('returns 1000 for n = 10', () => {
    expect(sumOddNumbers(10)).toBe(1000);
  });
});
