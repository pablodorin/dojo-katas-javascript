const tribonacci = require('./67-kata.js');

describe('Tribonacci Sequence', () => {
  test('should return empty array if n == 0', () => {
    expect(tribonacci([1, 1, 1], 0)).toEqual([]);
  });

  test('should return first element if n == 1', () => {
    expect(tribonacci([1, 1, 1], 1)).toEqual([1]);
  });

  test('should return first two elements if n == 2', () => {
    expect(tribonacci([1, 1, 1], 2)).toEqual([1, 1]);
  });

  test('should return signature if n == 3', () => {
    expect(tribonacci([1, 1, 1], 3)).toEqual([1, 1, 1]);
  });

  test('should return correct tribonacci sequence for [1, 1, 1]', () => {
    expect(tribonacci([1, 1, 1], 10)).toEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
  });

  test('should return correct tribonacci sequence for [0, 0, 1]', () => {
    expect(tribonacci([0, 0, 1], 10)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
  });

  test('should return correct length', () => {
    expect(tribonacci([2, 2, 2], 5).length).toBe(5);
  });

  test('should work with negative numbers', () => {
    expect(tribonacci([-1, -1, -1], 5)).toEqual([-1, -1, -1, -3, -5]);
  });
});
