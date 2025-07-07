const findNextSquare = require('./57-kata.js');

describe('findNextSquare', () => {
  test('returns next perfect square when input is a perfect square', () => {
    expect(findNextSquare(121)).toBe(144);
    expect(findNextSquare(625)).toBe(676);
    expect(findNextSquare(0)).toBe(1);
    expect(findNextSquare(1)).toBe(4);
  });

  test('returns -1 when input is not a perfect square', () => {
    expect(findNextSquare(114)).toBe(-1);
    expect(findNextSquare(26)).toBe(-1);
    expect(findNextSquare(300)).toBe(-1);
  });
});
