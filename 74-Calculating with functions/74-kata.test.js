
const {
  zero, one, two, three, four, five, six, seven, eight, nine,
  plus, minus, times, dividedBy
} = require('./74-kata.js');


describe('Calculating with Functions', () => {
  test('seven(times(five())) === 35', () => {
    expect(seven(times(five()))).toBe(35);
  });

  test('four(plus(nine())) === 13', () => {
    expect(four(plus(nine()))).toBe(13);
  });

  test('eight(minus(three())) === 5', () => {
    expect(eight(minus(three()))).toBe(5);
  });

  test('six(dividedBy(two())) === 3', () => {
    expect(six(dividedBy(two()))).toBe(3);
  });

  test('eight(dividedBy(three())) === 2', () => {
    expect(eight(dividedBy(three()))).toBe(2);
  });
});