const validatePIN = require('./kata-32.js');

describe('validatePIN', () => {
  test('PIN válido de 4 dígitos', () => {
    expect(validatePIN('1234')).toBe(true);
  });

  test('PIN válido de 6 dígitos', () => {
    expect(validatePIN('123456')).toBe(true);
  });

  test('PIN inválido con 5 dígitos', () => {
    expect(validatePIN('12345')).toBe(false);
  });

  test('PIN inválido con letras', () => {
    expect(validatePIN('a234')).toBe(false);
    expect(validatePIN('123a')).toBe(false);
  });

  test('PIN vacío', () => {
    expect(validatePIN('')).toBe(false);
  });

  test('PIN con caracteres especiales', () => {
    expect(validatePIN('123!')).toBe(false);
  });
});
