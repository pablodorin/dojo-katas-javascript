const messiGoals = require('./72-kata.js');

describe('messiGoals', () => {
  test('returns the total goals from all leagues', () => {
    expect(messiGoals(5, 10, 2)).toBe(17);
    expect(messiGoals(0, 0, 0)).toBe(0);
    expect(messiGoals(1, 1, 1)).toBe(3);
    expect(messiGoals(12, 8, 4)).toBe(24);
  });
});
