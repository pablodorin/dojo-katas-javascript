const isUpperCase = require('./81-kata.js');

describe('isUpperCase', () => {
  test('"c" -> false', () => {
    expect(isUpperCase("c")).toBe(false);
  });

  test('"C" -> true', () => {
    expect(isUpperCase("C")).toBe(true);
  });

  test('"hello I AM DONALD" -> false', () => {
    expect(isUpperCase("hello I AM DONALD")).toBe(false);
  });

  test('"HELLO I AM DONALD" -> true', () => {
    expect(isUpperCase("HELLO I AM DONALD")).toBe(true);
  });

  test('"ACSKLDFJSgSKLDFJSKLDFJ" -> false', () => {
    expect(isUpperCase("ACSKLDFJSgSKLDFJSKLDFJ")).toBe(false);
  });

  test('"ACSKLDFJSGSKLDFJSKLDFJ" -> true', () => {
    expect(isUpperCase("ACSKLDFJSGSKLDFJSKLDFJ")).toBe(true);
  });

  test('"123!@#" -> true (no letras minúsculas)', () => {
    expect(isUpperCase("123!@#")).toBe(true);
  });

  test('"" -> true (cadena vacía)', () => {
    expect(isUpperCase("")).toBe(true);
  });
});
