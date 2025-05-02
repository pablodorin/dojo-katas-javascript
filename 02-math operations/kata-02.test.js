const basicOp = require('./kata-02.js');

describe('basicOp', () => {
  test('suma: 3 + 4 = 7', () => {
    expect(basicOp('+', 3, 4)).toBe(7);
  });

  test('resta: 10 - 5 = 5', () => {
    expect(basicOp('-', 10, 5)).toBe(5);
  });

  test('multiplicación: 2 * 6 = 12', () => {
    expect(basicOp('*', 2, 6)).toBe(12);
  });

  test('división: 8 / 2 = 4', () => {
    expect(basicOp('/', 8, 2)).toBe(4);
  });

  test('operador inválido devuelve 0', () => {
    expect(basicOp('%', 5, 2)).toBe(0);
  });

  test('división por 0 devuelve Infinity', () => {
    expect(basicOp('/', 4, 0)).toBe(Infinity);
  });
});
