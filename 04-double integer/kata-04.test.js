const doubleInt = require('./kata-04.js');

test('dobla un número positivo', () => {
    expect(doubleInt(3)).toBe(6);
});

test('dobla un número negativo', () => {
    expect(doubleInt(-4)).toBe(-8);
});

test('dobla el cero', () => {
    expect(doubleInt(0)).toBe(0);
});

test('dobla un número grande', () => {
    expect(doubleInt(100000)).toBe(200000);
});
