const smallest = require('./kata-08');

describe('smallest', () => {
  test('retorna el menor número de un array positivo', () => {
    expect(smallest([34, 15, 88, 2])).toBe(2);
  });

  test('retorna el menor número de un array con negativos', () => {
    expect(smallest([34, -345, -1, 100])).toBe(-345);
  });

  test('funciona con un solo elemento', () => {
    expect(smallest([99])).toBe(99);
  });

  test('funciona con todos números iguales', () => {
    expect(smallest([5, 5, 5, 5])).toBe(5);
  });

  test('funciona con números en orden descendente', () => {
    expect(smallest([9, 7, 5, 3, 1])).toBe(1);
  });
});
