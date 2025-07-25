const { digitize } = require('./75-kata.js');

describe('digitize', () => {
  test('should convert 35231 to [1, 3, 2, 5, 3]', () => {
    expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
  });

  test('should convert 0 to [0]', () => {
    expect(digitize(0)).toEqual([0]);
  });

  test('should convert 123456789 to [9,8,7,6,5,4,3,2,1]', () => {
    expect(digitize(123456789)).toEqual([9,8,7,6,5,4,3,2,1]);
  });

  test('should convert 1000 to [0,0,0,1]', () => {
    expect(digitize(1000)).toEqual([0,0,0,1]);
  });

  test('should handle large numbers', () => {
    expect(digitize(9876543210987)).toEqual([7,8,9,0,1,2,3,4,5,6,7,8,9]);
  });
});
