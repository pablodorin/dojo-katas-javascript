const transport = require('./kata-06.js'); // Asegurate de exportar la función en transport.js

describe('transport', () => {
  test('debería calcular sin descuento (menos de 3 días)', () => {
    expect(transport(2)).toBe(80); // 2 * 40
  });

  test('debería aplicar descuento de $20 (entre 3 y 6 días)', () => {
    expect(transport(3)).toBe(100); // 3 * 40 - 20
    expect(transport(5)).toBe(180); // 5 * 40 - 20
  });

  test('debería aplicar descuento de $40 (7 días o más)', () => {
    expect(transport(7)).toBe(230); // 7 * 40 - 50
    expect(transport(10)).toBe(350); // 10 * 40 - 50
  });
});
