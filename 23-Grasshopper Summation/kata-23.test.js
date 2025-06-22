const summation = require('./kata-23.js'); // Asegúrate de que el nombre del archivo sea correcto

describe('summation', () => {
  test('returns 1 when input is 1', () => {
    expect(summation(1)).toBe(1);
  });

  test('returns 3 when input is 2', () => {
    expect(summation(2)).toBe(3); // 1 + 2
  });

  test('returns 6 when input is 3', () => {
    expect(summation(3)).toBe(6); // 1 + 2 + 3
  });

  test('returns 36 when input is 8', () => {
    expect(summation(8)).toBe(36); // 1 + 2 + 3 + ... + 8
  });

  test('returns 55 when input is 10', () => {
    expect(summation(10)).toBe(55); // 1 + 2 + ... + 10
  });
});
