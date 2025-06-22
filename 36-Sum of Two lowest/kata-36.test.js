const sumTwoSmallestNumbers = require('./kata-36.js'); // Reemplaza con el nombre de tu archivo

test('sumTwoSmallestNumbers', () => {
  expect(sumTwoSmallestNumbers([19, 5, 42, 2, 77])).toBe(7);
  expect(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])).toBe(3453455);
  expect(sumTwoSmallestNumbers([1, 2, 3, 4])).toBe(3);
  expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toBe(16);
  expect(sumTwoSmallestNumbers([100, 200, 1, 2])).toBe(3);
  expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13);
});
