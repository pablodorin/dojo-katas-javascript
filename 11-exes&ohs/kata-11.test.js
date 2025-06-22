const exes = require('./kata-11');

describe('exes', () => {
  test('returns true for equal number of x and o (lowercase)', () => {
    expect(exes("ooxx")).toBe(true);
  });

  test('returns false when x and o counts differ', () => {
    expect(exes("xooxx")).toBe(false);
  });

  test('returns true when x and o counts match, mixed case', () => {
    expect(exes("ooxXm")).toBe(true);
  });

  test('returns true when no x or o is present', () => {
    expect(exes("zpzpzpp")).toBe(true);
  });

  test('returns false when only o is present without matching x', () => {
    expect(exes("zzoo")).toBe(false);
  });
});
