const sumOfNumbers = require('./kata-18');

describe('sumOfNumbers', () => {
  test('should return the same number when both inputs are equal', () => {
    expect(sumOfNumbers(3, 3)).toBe(3);
  });

  test('should sum positive integers in range (1, 2)', () => {
    expect(sumOfNumbers(1, 2)).toBe(3);
  });

  test('should work regardless of order (2, 1)', () => {
    expect(sumOfNumbers(2, 1)).toBe(3);
  });

  test('should sum a positive and a negative number', () => {
    expect(sumOfNumbers(-1, 2)).toBe(2); // -1 + 0 + 1 + 2 = 2
  });

  test('should return 0 when a = -1 and b = 1', () => {
    expect(sumOfNumbers(-1, 1)).toBe(0); // -1 + 0 + 1 = 0
  });

  test('should handle large ranges', () => {
    expect(sumOfNumbers(1, 100)).toBe(5050); // fórmula de Gauss
  });
});
