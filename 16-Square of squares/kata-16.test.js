const isSquare = require('./kata-16');

describe('isSquare', () => {
  test('returns false for -1', () => {
    expect(isSquare(-1)).toBe(false);
  });

  test('returns true for 0', () => {
    expect(isSquare(0)).toBe(true);
  });

  test('returns false for 3', () => {
    expect(isSquare(3)).toBe(false);
  });

  test('returns true for 4', () => {
    expect(isSquare(4)).toBe(true);
  });

  test('returns true for 25', () => {
    expect(isSquare(25)).toBe(true);
  });

  test('returns false for 26', () => {
    expect(isSquare(26)).toBe(false);
  });
});

