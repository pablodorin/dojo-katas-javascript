const isEven  = require('./56-kata.js');

describe('isEven', () => {
  test('should return true for even integers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });

  test('should return false for odd integers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });

  test('should return false for floats with non-zero decimal part', () => {
    expect(isEven(2.5)).toBe(false);
    expect(isEven(-4.1)).toBe(false);
  });

  test('should return true for floats that are whole numbers', () => {
    expect(isEven(8.0)).toBe(true);
    expect(isEven(-6.0)).toBe(true);
  });
});
