const uniqueInOrder = require('./52-kata');

describe('uniqueInOrder', () => {
  test('remueve caracteres consecutivos duplicados de una cadena', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
  });

  test('respeta mayúsculas y minúsculas', () => {
    expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D']);
  });

  test('funciona con listas de números', () => {
    expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  test('devuelve lista vacía si recibe una cadena vacía', () => {
    expect(uniqueInOrder('')).toEqual([]);
  });

  test('devuelve lista vacía si recibe una lista vacía', () => {
    expect(uniqueInOrder([])).toEqual([]);
  });

  test('devuelve una lista con un solo elemento si la entrada tiene un único elemento', () => {
    expect(uniqueInOrder('A')).toEqual(['A']);
    expect(uniqueInOrder([1])).toEqual([1]);
  });
});
