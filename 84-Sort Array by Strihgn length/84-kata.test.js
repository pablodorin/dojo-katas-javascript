const sortByLength = require('./84-kata');

test('sorts array of strings by length from shortest to longest', () => {
  expect(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])).toEqual(["Eyes", "Glasses", "Monocles", "Telescopes"]);
  expect(sortByLength(["a", "abc", "ab"])).toEqual(["a", "ab", "abc"]);
  expect(sortByLength(["one", "three", "two", "four"])).toEqual(["one", "two", "four", "three"]);
  expect(sortByLength(["", "longer", "lo", "l"])).toEqual(["", "l", "lo", "longer"]);
});
