const sortTheOdd = require('./64-kata.js');

test('sorts only odd numbers in [7, 1]', () => {
  expect(sortTheOdd([7, 1])).toEqual([1, 7]);
});

test('sorts only odd numbers in [5, 8, 6, 3, 4]', () => {
  expect(sortTheOdd([5, 8, 6, 3, 4])).toEqual([3, 8, 6, 5, 4]);
});

test('sorts only odd numbers in full array', () => {
  expect(sortTheOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toEqual([1, 8, 3, 6, 5, 4, 7, 2, 9, 0]);
});

test('returns empty array for empty input', () => {
  expect(sortTheOdd([])).toEqual([]);
});

test('works with array of only even numbers', () => {
  expect(sortTheOdd([2, 4, 6])).toEqual([2, 4, 6]);
});

test('works with array of only odd numbers', () => {
  expect(sortTheOdd([3, 1, 5])).toEqual([1, 3, 5]);
});
