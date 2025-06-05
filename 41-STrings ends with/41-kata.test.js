const solution = require('./41-kata'); // o './41-kata.js' si es ese el archivo real

describe('String ends with?', () => {
  test('should return true if the string ends with the given substring', () => {
    expect(solution('abc', 'bc')).toBe(true);
    expect(solution('hello world', 'world')).toBe(true);
    expect(solution('javascript', 'script')).toBe(true);
  });

  test('should return false if the string does not end with the given substring', () => {
    expect(solution('abc', 'd')).toBe(false);
    expect(solution('openai', 'AI')).toBe(false); // case sensitive
    expect(solution('testing', 'ingg')).toBe(false);
  });

  test('should return true for empty ending string', () => {
    expect(solution('abc', '')).toBe(true); // any string ends with ''
  });

  test('should return false when ending is longer than string', () => {
    expect(solution('short', 'longerending')).toBe(false);
  });
});
