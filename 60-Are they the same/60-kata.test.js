const comp = require('./60-kata.js');

describe('comp', () => {
  test('returns true for valid arrays with matching squares', () => {
    const a = [121, 144, 19, 161, 19, 144, 19, 11];
    const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
    expect(comp(a, b)).toBe(true);
  });

  test('returns false if an element in b is not a square of any in a', () => {
    const a = [121, 144, 19, 161, 19, 144, 19, 11];
    const b = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
    expect(comp(a, b)).toBe(false);
  });

  test('returns false if a square is incorrect', () => {
    const a = [121, 144, 19, 161, 19, 144, 19, 11];
    const b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
    expect(comp(a, b)).toBe(false);
  });

  test('returns false if a is null', () => {
    const a = null;
    const b = [1];
    expect(comp(a, b)).toBe(false);
  });

  test('returns false if b is null', () => {
    const a = [1];
    const b = null;
    expect(comp(a, b)).toBe(false);
  });

  test('returns true for empty arrays', () => {
    const a = [];
    const b = [];
    expect(comp(a, b)).toBe(true);
  });
});
