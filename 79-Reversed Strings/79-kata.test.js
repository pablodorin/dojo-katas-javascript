const solution = require('./79-kata.js');

describe('Reversed Strings', () => {
  test('should reverse "world" to "dlrow"', () => {
    expect(solution('world')).toBe('dlrow');
  });

  test('should reverse "word" to "drow"', () => {
    expect(solution('word')).toBe('drow');
  });

  test('should reverse empty string to empty string', () => {
    expect(solution('')).toBe('');
  });

  test('should reverse single character to itself', () => {
    expect(solution('a')).toBe('a');
  });

  test('should reverse a palindrome to itself', () => {
    expect(solution('madam')).toBe('madam');
  });
});