const square = require('./66-kata.js');

describe('square', () => {
  test('should return the square of a positive number', () => {
    expect(square(2)).toBe(4);
    expect(square(5)).toBe(25);
  });

  test('should return the square of a negative number', () => {
    expect(square(-3)).toBe(9);
  });

  test('should return 0 when input is 0', () => {
    expect(square(0)).toBe(0);
  });

  test('should return the square of a float', () => {
    expect(square(1.5)).toBeCloseTo(2.25);
  });
});
