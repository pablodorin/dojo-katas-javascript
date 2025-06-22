const nbYear = require('./45-kata.js');

describe('nbYear', () => {
  test('should return 3 for (1000, 2, 50, 1200)', () => {
    expect(nbYear(1000, 2, 50, 1200)).toBe(3);
  });

  test('should return 15 for (1500, 5, 100, 5000)', () => {
    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
  });

  test('should return 10 for (1500000, 2.5, 10000, 2000000)', () => {
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
  });

  test('should return 1 when population already exceeds target', () => {
    expect(nbYear(1000, 100, 0, 1800)).toBe(1);
  });

  test('should return 0 if p0 already >= p', () => {
    expect(nbYear(2000, 2, 50, 1500)).toBe(0);
  });
});
