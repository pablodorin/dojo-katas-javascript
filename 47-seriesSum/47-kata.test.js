const seriesSum = require('./47-kata');

test('returns correct sum for n = 0', () => {
  expect(seriesSum(0)).toBe("0.00");
});

test('returns correct sum for n = 1', () => {
  expect(seriesSum(1)).toBe("1.00");
});

test('returns correct sum for n = 2', () => {
  expect(seriesSum(2)).toBe("1.25");
});

test('returns correct sum for n = 5', () => {
  expect(seriesSum(5)).toBe("1.57");
});
