const findStray = require('./78-kata.js');

describe('findStray', () => {
  test('should return 2 from [1, 1, 2]', () => {
    expect(findStray([1, 1, 2])).toBe(2);
  });

  test('should return 3 from [17, 17, 3, 17, 17, 17, 17]', () => {
    expect(findStray([17, 17, 3, 17, 17, 17, 17])).toBe(3);
  });

  test('should return 99 from [0, 0, 0, 99, 0]', () => {
    expect(findStray([0, 0, 0, 99, 0])).toBe(99);
  });

  test('should return -1 from [7, 7, 7, 7, -1]', () => {
    expect(findStray([7, 7, 7, 7, -1])).toBe(-1);
  });

  test('should return 0 from [1, 1, 1, 0, 1, 1, 1]', () => {
    expect(findStray([1, 1, 1, 0, 1, 1, 1])).toBe(0);
  });
});
