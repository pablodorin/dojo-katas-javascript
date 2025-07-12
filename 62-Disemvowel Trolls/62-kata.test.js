const disemvowel = require('./62-kata.js');

describe('disemvowel', () => {
  test('removes all vowels from a given string', () => {
    expect(disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
    expect(disemvowel('No vowels here')).toBe('N vwls hr');
    expect(disemvowel('AEIOUaeiou')).toBe('');
    expect(disemvowel('Nothing to remove here')).toBe('Nthng t rmv hr');
    expect(disemvowel('')).toBe('');
  });
});
