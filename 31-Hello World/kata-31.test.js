const hw = require('./kata-31.js');

test('should return hello World according to lower o uppercase', () => {
  expect(hw('HELLO')).toBe("HELLO WORLD");
  expect(hw('hello')).toBe("hello world");
});

