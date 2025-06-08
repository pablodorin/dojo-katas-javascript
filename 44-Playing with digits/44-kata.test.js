const digPow = require('./44-kata');

describe('Playing with digits', () => {
  test('should return 1 for digPow(89, 1)', () => {
    expect(digPow(89, 1)).toBe(1);
  });

  test('should return -1 for digPow(92, 1)', () => {
    expect(digPow(92, 1)).toBe(-1);
  });

  test('should return 2 for digPow(695, 2)', () => {
    expect(digPow(695, 2)).toBe(2);
  });

  test('should return 51 for digPow(46288, 3)', () => {
    expect(digPow(46288, 3)).toBe(51);
  });

  test('should return -1 for digPow(123, 5)', () => {
    expect(digPow(123, 5)).toBe(-1);
  });
});
