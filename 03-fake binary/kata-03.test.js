const fakeBinary = require('./kata-03.js');

test('Convierte dígitos menores que 5 en 0 y 5 o más en 1', () => {
  expect(fakeBinary("45385593107843568")).toBe("01011110001100111");
});

test('Todos menores que 5 deben ser ceros', () => {
  expect(fakeBinary("01234")).toBe("00000");
});

test('Todos mayores o iguales a 5 deben ser unos', () => {
  expect(fakeBinary("56789")).toBe("11111");
});

test('Cadena mixta simple', () => {
  expect(fakeBinary("509")).toBe("101");
});
