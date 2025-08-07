const isPangram = require('./85-kata');

describe('Detect Pangram', () => {
  test('should detect a classic pangram', () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog")).toBe(true);
  });

  test('should return false for missing letters', () => {
    expect(isPangram("The quick brown fox jumps over the dog")).toBe(false);
  });

  test('should work with uppercase and lowercase mixed', () => {
    expect(isPangram("THE QUICK BROWN FOX jumps over the lazy dog")).toBe(true);
  });

  test('should return false for empty string', () => {
    expect(isPangram("")).toBe(false);
  });

  test('should ignore numbers and punctuation', () => {
    expect(isPangram("Pack my box with five dozen liquor jugs! 1234567890...")).toBe(true);
  });

  test('should return false if some letters are missing even with punctuation', () => {
    expect(isPangram("Pack my box with five liquor jugs!")).toBe(false);
  });
});
