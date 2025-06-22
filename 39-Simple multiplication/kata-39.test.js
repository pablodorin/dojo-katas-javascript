const SimpleMultiplication = require('./kata-39.js');

describe('SimpleMultiplication', () => {
  test('should multiply even numbers by 8', () => {
    expect(SimpleMultiplication(2)).toBe(16);
    expect(SimpleMultiplication(4)).toBe(32);
    expect(SimpleMultiplication(0)).toBe(0);
    expect(SimpleMultiplication(-6)).toBe(-48);
  });

  test('should multiply odd numbers by 9', () => {
    expect(SimpleMultiplication(1)).toBe(9);
    expect(SimpleMultiplication(3)).toBe(27);
    expect(SimpleMultiplication(-5)).toBe(-45);
    expect(SimpleMultiplication(7)).toBe(63);
  });
});
