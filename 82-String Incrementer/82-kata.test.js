const incrementString = require('./82-kata.js');

describe('incrementString', () => {
  test('agrega 1 si no hay número', () => {
    expect(incrementString('foo')).toBe('foo1');
  });

  test('incrementa número simple', () => {
    expect(incrementString('foobar23')).toBe('foobar24');
  });

  test('mantiene ceros iniciales', () => {
    expect(incrementString('foo0042')).toBe('foo0043');
  });

  test('incrementa sin romper el largo cuando es posible', () => {
    expect(incrementString('foo099')).toBe('foo100');
  });

  test('incrementa cuando hay un solo dígito', () => {
    expect(incrementString('foo9')).toBe('foo10');
  });

  test('funciona con solo números', () => {
    expect(incrementString('009')).toBe('010');
  });

  test('funciona con string vacío', () => {
    expect(incrementString('')).toBe('1');
  });
});
