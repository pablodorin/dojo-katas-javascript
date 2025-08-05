const findAverage = require('./83-kata.js');

describe('findAverage', () => {
  test('devuelve el promedio de un array de números', () => {
    expect(findAverage([1, 2, 3, 4, 5])).toBe(3);
    expect(findAverage([10, 20, 30])).toBe(20);
    expect(findAverage([100])).toBe(100);
  });

  test('devuelve 0 si el array está vacío', () => {
    expect(findAverage([])).toBe(0);
  });

  test('maneja números negativos correctamente', () => {
    expect(findAverage([-1, -2, -3])).toBe(-2);
  });

  test('maneja mezcla de positivos y negativos', () => {
    expect(findAverage([5, -5, 10, -10])).toBe(0);
  });
});
