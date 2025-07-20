const move = require('./69-kata.js');

describe('Grasshopper - Terminal game move function', () => {
  test('move(0, 4) should return 8', () => {
    expect(move(0, 4)).toBe(8);
  });

  test('move(3, 6) should return 15', () => {
    expect(move(3, 6)).toBe(15);
  });

  test('move(2, 5) should return 12', () => {
    expect(move(2, 5)).toBe(12);
  });

  test('move(10, 1) should return 12', () => {
    expect(move(10, 1)).toBe(12);
  });
});
