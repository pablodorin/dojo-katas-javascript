const twoSum = require('./59-kata');

describe('twoSum', () => {
  test('should return indices that sum to target - example 1', () => {
    const arr = [1, 2, 3];
    const target = 4;
    const result = twoSum(arr, target);
    expect(arr[result[0]] + arr[result[1]]).toBe(target);
    expect(result[0]).not.toBe(result[1]);
  });

  test('should return indices that sum to target - example 2', () => {
    const arr = [3, 2, 4];
    const target = 6;
    const result = twoSum(arr, target);
    expect(arr[result[0]] + arr[result[1]]).toBe(target);
    expect(result[0]).not.toBe(result[1]);
  });

  test('should return indices with different numbers', () => {
    const arr = [10, 5, 2, 3, 7];
    const target = 9;
    const result = twoSum(arr, target);
    expect(arr[result[0]] + arr[result[1]]).toBe(target);
    expect(result[0]).not.toBe(result[1]);
  });

  test('should work with negative numbers', () => {
    const arr = [-1, -2, -3, -4, -5];
    const target = -8;
    const result = twoSum(arr, target);
    expect(arr[result[0]] + arr[result[1]]).toBe(target);
    expect(result[0]).not.toBe(result[1]);
  });
});
