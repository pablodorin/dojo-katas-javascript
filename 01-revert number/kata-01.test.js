//const opposite2 = require('./kata-01.js');

const opposite2 = require('./kata-01.2.js');

test('opposite of positive number', () => {
  expect(opposite2(5)).toBe(-5);
});

test('opposite of negative number', () => {
  expect(opposite2(-3)).toBe(3);
});

test('opposite of zero', () => {
  expect(opposite2(0)).toBe(-0); // -0 === 0 en JS
});

test('opposite of decimal', () => {
  expect(opposite2(2.5)).toBe(-2.5);
});
