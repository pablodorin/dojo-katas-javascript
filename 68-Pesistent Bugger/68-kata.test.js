const persistence = require('./68-kata.js');

describe('Persistent Bugger', () => {
  test('returns 3 for input 39', () => {
    expect(persistence(39)).toBe(3);
  });

  test('returns 4 for input 999', () => {
    expect(persistence(999)).toBe(4);
  });

  test('returns 0 for input 4', () => {
    expect(persistence(4)).toBe(0);
  });

  test('returns 2 for input 25 (2*5 = 10, 1*0 = 0)', () => {
    expect(persistence(25)).toBe(2);
  });

  test('returns 1 for input 10 (1*0 = 0)', () => {
    expect(persistence(10)).toBe(1);
  });

  test('returns 0 for any single-digit number', () => {
    for (let i = 0; i < 10; i++) {
      expect(persistence(i)).toBe(0);
    }
  });
});
