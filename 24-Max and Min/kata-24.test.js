const { getMax, getMin } = require('./kata-24.js');

describe('getMax and getMin functions', () => {
  test('Array [4, 6, 2, 1, 9, 63, -134, 566]', () => {
    expect(getMax([4, 6, 2, 1, 9, 63, -134, 566])).toBe(566);
    expect(getMin([4, 6, 2, 1, 9, 63, -134, 566])).toBe(-134);
  });

  test('Array [-52, 56, 30, 29, -54, 0, -110]', () => {
    expect(getMax([-52, 56, 30, 29, -54, 0, -110])).toBe(56);
    expect(getMin([-52, 56, 30, 29, -54, 0, -110])).toBe(-110);
  });

  test('Array [42, 54, 65, 87, 0]', () => {
    expect(getMax([42, 54, 65, 87, 0])).toBe(87);
    expect(getMin([42, 54, 65, 87, 0])).toBe(0);
  });

  test('Array [5]', () => {
    expect(getMax([5])).toBe(5);
    expect(getMin([5])).toBe(5);
  });

  test('Array with negative values only [-5, -10, -3]', () => {
    expect(getMax([-5, -10, -3])).toBe(-3);
    expect(getMin([-5, -10, -3])).toBe(-10);
  });
});

