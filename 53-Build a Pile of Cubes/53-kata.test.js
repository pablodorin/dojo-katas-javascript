const { findNb } = require('./53-kata.js');

describe('findNb', () => {
  test('returns correct n for known volume', () => {
    expect(findNb(1071225)).toBe(45);
    expect(findNb(4183059834009)).toBe(2022);
    expect(findNb(24723578342962)).toBe(-1);
    expect(findNb(135440716410000)).toBe(4824);
  });

  test('returns -1 for impossible volumes', () => {
    expect(findNb(91716553919377)).toBe(-1);
    expect(findNb(1)).toBe(1); // 1^3 = 1
    expect(findNb(9)).toBe(2); // 1^3 + 2^3 = 9
  });

  test('handles edge cases', () => {
    expect(findNb(0)).toBe(0);
    expect(findNb(-1)).toBe(-1);
  });
});
