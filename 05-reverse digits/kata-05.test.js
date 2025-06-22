const digitize = require('./kata-05.js');

test('Reverses digits of a positive number', () => {
  expect(digitize(348597)).toEqual([7, 9, 5, 8, 4, 3]);
});

test('Handles single-digit number', () => {
  expect(digitize(5)).toEqual([5]);
});

test('Handles zero', () => {
  expect(digitize(0)).toEqual([0]);
});

test('Handles large number', () => {
  expect(digitize(1234567890)).toEqual([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});
