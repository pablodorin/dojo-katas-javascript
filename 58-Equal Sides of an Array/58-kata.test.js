const findEvenIndex  = require('./58-kata');

describe('findEvenIndex', () => {
  test('should return correct index for example cases', () => {
    expect(findEvenIndex([1,2,3,4,3,2,1])).toBe(3);
    expect(findEvenIndex([1,100,50,-51,1,1])).toBe(1);
    expect(findEvenIndex([20,10,-80,10,10,15,35])).toBe(0);
  });

  test('should return -1 when no index is valid', () => {
    expect(findEvenIndex([10,-80,10,10,15,35])).toBe(-1);
    expect(findEvenIndex([1,2,3,4,5])).toBe(-1);
  });

  test('should work with single element array', () => {
    expect(findEvenIndex([0])).toBe(0);
    expect(findEvenIndex([10])).toBe(0);
  });

  test('should handle negative numbers', () => {
    expect(findEvenIndex([-1, -1, -1, 0, 1, 1])).toBe(0);;
  });
});
