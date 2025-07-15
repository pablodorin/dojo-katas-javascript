const isPalindrome = require('./65-kata.js');

test('Detects simple palindrome', () => {
  expect(isPalindrome('madam')).toBe(true);
});

test('Detects palindrome with capital letters', () => {
  expect(isPalindrome('RaceCar')).toBe(true);
});

test('Returns false for non-palindrome', () => {
  expect(isPalindrome('hello')).toBe(false);
});

test('Single letter is a palindrome', () => {
  expect(isPalindrome('a')).toBe(true);
});

test('Empty string is a palindrome', () => {
  expect(isPalindrome('')).toBe(true);
});
