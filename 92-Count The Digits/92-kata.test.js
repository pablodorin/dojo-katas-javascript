const nbDig = require('./92-kata');

describe('Count the Digit (nbDig)', () => {
  test('n = 10, d = 1 -> 4', () => {
    expect(nbDig(10, 1)).toBe(4);
  });

  test('n = 25, d = 1 -> 11', () => {
    expect(nbDig(25, 1)).toBe(11);
  });

  test('borde: n = 0, d = 0 -> 1', () => {
    expect(nbDig(0, 0)).toBe(1);
  });
});
