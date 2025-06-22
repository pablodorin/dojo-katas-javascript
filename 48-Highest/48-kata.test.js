// highestProfitWins.test.js

const highestProfitWins = require('./48-kata.js');

describe('highestProfitWins', () => {
  test('returns [1, 5] for [1, 2, 3, 4, 5]', () => {
    expect(highestProfitWins([1, 2, 3, 4, 5])).toEqual([1, 5]);
  });

  test('returns [5, 2334454] for [2334454, 5]', () => {
    expect(highestProfitWins([2334454, 5])).toEqual([5, 2334454]);
  });

  test('returns [1, 1] for [1]', () => {
    expect(highestProfitWins([1])).toEqual([1, 1]);
  });

  test('returns [-10, 100] for [-10, 0, 100]', () => {
    expect(highestProfitWins([-10, 0, 100])).toEqual([-10, 100]);
  });

  test('returns [0, 0] for [0]', () => {
    expect(highestProfitWins([0])).toEqual([0, 0]);
  });

  test('returns [-5, -1] for [-3, -5, -1]', () => {
    expect(highestProfitWins([-3, -5, -1])).toEqual([-5, -1]);
  });
});
