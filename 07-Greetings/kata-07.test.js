const greet = require('./kata-07');

describe('greet', () => {
  test('should return "Hello boss" when name equals owner', () => {
    expect(greet('Daniel', 'Daniel')).toBe('Hello boss');
  });

  test('should return "Hello guest" when name is different from owner', () => {
    expect(greet('Greg', 'Daniel')).toBe('Hello guest');
  });
});
