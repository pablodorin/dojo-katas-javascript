const binaryArrayToNumber = require('./55-kata.js');

describe('binaryArrayToNumber', () => {
  test('should convert [0, 0, 0, 1] to 1', () => {
    expect(binaryArrayToNumber([0, 0, 0, 1])).toBe(1);
  });

  test('should convert [0, 0, 1, 0] to 2', () => {
    expect(binaryArrayToNumber([0, 0, 1, 0])).toBe(2);
  });

  test('should convert [0, 1, 0, 1] to 5', () => {
    expect(binaryArrayToNumber([0, 1, 0, 1])).toBe(5);
  });

  test('should convert [1, 0, 0, 1] to 9', () => {
    expect(binaryArrayToNumber([1, 0, 0, 1])).toBe(9);
  });

  test('should convert [0, 1, 1, 0] to 6', () => {
    expect(binaryArrayToNumber([0, 1, 1, 0])).toBe(6);
  });

  test('should convert [1, 1, 1, 1] to 15', () => {
    expect(binaryArrayToNumber([1, 1, 1, 1])).toBe(15);
  });

  test('should convert [1, 0, 1, 1] to 11', () => {
    expect(binaryArrayToNumber([1, 0, 1, 1])).toBe(11);
  });
});
