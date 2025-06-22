

const countSheeps = require('./kata-21.js'); 
describe('countSheeps', () => {
  test('should return 17 for the given example array', () => {
    const arrayOfSheep = [
      true, true, true, false,
      true, true, true, true,
      true, false, true, false,
      true, false, false, true,
      true, true, true, true,
      false, false, true, true
    ];
    expect(countSheeps(arrayOfSheep)).toBe(17);
  });

  test('should return 0 for an array of all falsy or undefined values', () => {
    const arrayOfSheep = [false, null, undefined, false, null];
    expect(countSheeps(arrayOfSheep)).toBe(0);
  });

  test('should return the correct count ignoring null and undefined', () => {
    const arrayOfSheep = [true, null, true, undefined, false, true];
    expect(countSheeps(arrayOfSheep)).toBe(3);
  });

  test('should return 0 for an empty array', () => {
    expect(countSheeps([])).toBe(0);
  });
});
