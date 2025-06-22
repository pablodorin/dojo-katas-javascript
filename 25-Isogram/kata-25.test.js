const isIsogram = require('./kata-25');


describe('isIsogram', () => {
  test('returns true for "Dermatoglyphics"', () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
  });

  test('returns false for "aba"', () => {
    expect(isIsogram("aba")).toBe(false);
  });

  test('returns false for "moOse" (case insensitive)', () => {
    expect(isIsogram("moOse")).toBe(false);
  });

  test('returns true for empty string', () => {
    expect(isIsogram("")).toBe(true);
  });

  test('returns true for "isogram"', () => {
    expect(isIsogram("isogram")).toBe(true);
  });

  test('returns false for "eleven"', () => {
    expect(isIsogram("eleven")).toBe(false);
  });

  test('returns true for single letter word', () => {
    expect(isIsogram("a")).toBe(true);
  });
});
