const expandedForm = require('./73-kata.js');

test('Expanded form of 12', () => {
  expect(expandedForm(12)).toBe("10 + 2");
});

test('Expanded form of 42', () => {
  expect(expandedForm(42)).toBe("40 + 2");
});

test('Expanded form of 70304', () => {
  expect(expandedForm(70304)).toBe("70000 + 300 + 4");
});

test('Expanded form of 9000000', () => {
  expect(expandedForm(9000000)).toBe("9000000");
});

test('Expanded form of 500609', () => {
  expect(expandedForm(500609)).toBe("500000 + 600 + 9");
});
