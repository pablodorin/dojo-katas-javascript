const sequenceSum = require('./91-kata'); // ajusta la ruta según tu archivo

describe('Sum of a Sequence', () => {
  test('begin = 2, end = 2, step = 2 → 2', () => {
    expect(sequenceSum(2, 2, 2)).toBe(2);
  });

  test('begin = 2, end = 6, step = 2 → 12', () => {
    expect(sequenceSum(2, 6, 2)).toBe(12);
  });

  test('begin = 1, end = 5, step = 1 → 15', () => {
    expect(sequenceSum(1, 5, 1)).toBe(15);
  });

  test('begin = 1, end = 5, step = 3 → 5', () => {
    expect(sequenceSum(1, 5, 3)).toBe(5);
  });

  test('begin > end → 0', () => {
    expect(sequenceSum(10, 5, 2)).toBe(0);
  });
});
