const whoLikesIt = require('./49-kata');

describe('whoLikesIt', () => {
  test('returns "no one likes this" when array is empty', () => {
    expect(whoLikesIt([])).toBe("no one likes this");
  });

  test('returns single like', () => {
    expect(whoLikesIt(["Peter"])).toBe("Peter likes this");
  });

  test('returns likes for two people', () => {
    expect(whoLikesIt(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
  });

  test('returns likes for three people', () => {
    expect(whoLikesIt(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  });

  test('returns likes for four people (uses "and X others")', () => {
    expect(whoLikesIt(["Alex", "Jacob", "Mark", "Max"])).toBe("Alex, Jacob and 2 others like this");
  });

  test('returns likes for more than four people', () => {
    expect(
      whoLikesIt(["A", "B", "C", "D", "E", "F"])
    ).toBe("A, B and 4 others like this");
  });
});
