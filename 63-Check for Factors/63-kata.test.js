const checkForFactor = require('./63-kata.js');

describe('checkForFactor', () => {
  test('returns true when factor is a factor of base', () => {
    expect(checkForFactor(10, 2)).toBe(true);  // 10 % 2 === 0
    expect(checkForFactor(15, 5)).toBe(true);  // 15 % 5 === 0
    expect(checkForFactor(100, 10)).toBe(true); // 100 % 10 === 0
  });

  test('returns false when factor is not a factor of base', () => {
    expect(checkForFactor(10, 3)).toBe(false); // 10 % 3 !== 0
    expect(checkForFactor(7, 2)).toBe(false);  // 7 % 2 !== 0
  });

  test('handles edge cases correctly', () => {
    expect(checkForFactor(0, 1)).toBe(true); // 0 is divisible by any non-zero number
  });
});
