const sumSquare = require('./kata-14');

describe('sumSquare', () => {
  test('devuelve 0 para un array vacío', () => {
    expect(sumSquare([])).toBe(0);
  });

  test('devuelve 9 para [1, 2, 2]', () => {
    expect(sumSquare([1, 2, 2])).toBe(9); // 1*1 + 2*2 + 2*2 = 9
  });

  test('devuelve 14 para [1, 2, 3]', () => {
    expect(sumSquare([1, 2, 3])).toBe(14); // 1 + 4 + 9
  });

  test('devuelve 0 si todos los elementos son 0', () => {
    expect(sumSquare([0, 0, 0])).toBe(0);
  });

  test('funciona con números negativos', () => {
    expect(sumSquare([-1, -2, -2])).toBe(9); // (-1)^2 + (-2)^2 + (-2)^2 = 9
  });
});
