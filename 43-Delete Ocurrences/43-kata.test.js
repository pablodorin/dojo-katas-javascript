const deleteNth = require('./43-kata.js');

describe('deleteNth', () => {
  test('should limit repetitions to N times (basic case)', () => {
    expect(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)).toEqual([1, 2, 3, 1, 2, 3]);
  });

  test('should allow only 1 repetition of each', () => {
    expect(deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21]);
  });

  test('should return the same array if all elements already occur <= N times', () => {
    expect(deleteNth([1, 2, 3], 2)).toEqual([1, 2, 3]);
  });

  test('should return empty array if N is 0', () => {
    expect(deleteNth([1, 2, 3], 0)).toEqual([]);
  });

  test('should handle repeated elements', () => {
    expect(deleteNth([1, 1, 1, 1], 2)).toEqual([1, 1]);
  });
});
