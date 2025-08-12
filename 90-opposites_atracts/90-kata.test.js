const lovefunc = require('./90-kata.js');

describe('Opposites Attract', () => {
  test('uno par y otro impar -> true', () => {
    expect(lovefunc(4, 7)).toBe(true);
  });

  test('ambos pares -> false', () => {
    expect(lovefunc(2, 8)).toBe(false);
  });

  test('ambos impares -> false', () => {
    expect(lovefunc(5, 9)).toBe(false);
  });

  test('uno impar y otro par -> true', () => {
    expect(lovefunc(1, 4)).toBe(true);
  });

  test('extremos -> true', () => {
    expect(lovefunc(0, 3)).toBe(true);
  });
});
