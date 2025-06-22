const strToInteger = require('./kata-17');

describe('strToInteger', () => {
  test('convierte un string numérico simple', () => {
    expect(strToInteger("123")).toBe(123);
  });

  test('convierte un string con ceros iniciales', () => {
    expect(strToInteger("007")).toBe(7);
  });

  test('convierte un número negativo como string', () => {
    expect(strToInteger("-42")).toBe(-42);
  });

  test('convierte un número decimal como string', () => {
    expect(strToInteger("3.14")).toBe(3.14);
  });

  test('devuelve NaN si el string comienza con letras', () => {
    expect(strToInteger("abc123")).toBeNaN();
  });

  test('devuelve NaN si contiene letras luego del número', () => {
    expect(strToInteger("123abc")).toBeNaN();
  });

  test('devuelve NaN si no hay números', () => {
    expect(strToInteger("hello")).toBeNaN();
  });
});
