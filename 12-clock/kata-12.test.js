const giveTime = require('./kata-12.js');

describe('giveTime', () => {
  test('returns 61000 for h=0, m=1, s=1', () => {
    expect(giveTime(0, 1, 1)).toBe(61000);
  });

  test('returns 0 for h=0, m=0, s=0', () => {
    expect(giveTime(0, 0, 0)).toBe(0);
  });

  test('returns 3600000 for h=1, m=0, s=0', () => {
    expect(giveTime(1, 0, 0)).toBe(3600000);
  });

  test('returns 3661000 for h=1, m=1, s=1', () => {
    expect(giveTime(1, 1, 1)).toBe(3661000);
  });

  test('returns 9000000 for h=2, m=30, s=0', () => {
    expect(giveTime(2, 30, 0)).toBe(9000000);
  });
});
