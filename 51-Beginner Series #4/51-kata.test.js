// cockroachSpeed.test.js
const cockroachSpeed = require('./51-kata.js');

describe('cockroachSpeed', () => {
  test('should convert 1.08 km/h to 30 cm/s', () => {
    expect(cockroachSpeed(1.08)).toBe(30);
  });

  test('should return 0 for 0 km/h', () => {
    expect(cockroachSpeed(0)).toBe(0);
  });

  test('should handle a whole number input', () => {
    expect(cockroachSpeed(1)).toBe(27);
  });

  test('should round down properly', () => {
    expect(cockroachSpeed(1.09)).toBe(30); // 1.09 * 100000 / 3600 = 30.27...
  });

  test('should work for large numbers', () => {
    expect(cockroachSpeed(100)).toBe(2777);
  });
});
