const { getGrade } = require('./kata-22');

describe('getGrade', () => {
  test('returns A for average between 90 and 100', () => {
    expect(getGrade(95, 90, 93)).toBe('A');
  });

  test('returns B for average between 80 and 89', () => {
    expect(getGrade(82, 85, 87)).toBe('B');
  });

  test('returns C for average between 70 and 79', () => {
    expect(getGrade(70, 75, 78)).toBe('C');
  });

  test('returns D for average between 60 and 69', () => {
    expect(getGrade(60, 64, 66)).toBe('D');
  });

  test('returns F for average below 60', () => {
    expect(getGrade(50, 40, 59)).toBe('F');
  });
});
