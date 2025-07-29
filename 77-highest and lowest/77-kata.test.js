const highAndLow = require('./77-kata.js');

describe('highAndLow', () => {
  test('should return "5 1" for input "1 2 3 4 5"', () => {
    expect(highAndLow("1 2 3 4 5")).toBe("5 1");
  });

  test('should return "5 -3" for input "1 2 -3 4 5"', () => {
    expect(highAndLow("1 2 -3 4 5")).toBe("5 -3");
  });

  test('should return "9 -5" for input "1 9 3 4 -5"', () => {
    expect(highAndLow("1 9 3 4 -5")).toBe("9 -5");
  });

  test('should return "42 42" for input "42"', () => {
    expect(highAndLow("42")).toBe("42 42");
  });

  test('should handle negative numbers only', () => {
    expect(highAndLow("-1 -2 -3 -4 -5")).toBe("-1 -5");
  });

  test('should handle numbers with different spacing', () => {
    expect(highAndLow("  7  3   -2  ")).toBe("7 -2");
  });
});
