const gooseFilter = require('./88-kata.js');

test('should filter out geese from the bird list', () => {
  const input = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
  const expected = ["Mallard", "Hook Bill", "Crested", "Blue Swedish"];
  expect(gooseFilter(input)).toEqual(expected);
});

test('should return an empty array if all birds are geese', () => {
  const input = ["African", "Pilgrim", "Toulouse"];
  const expected = [];
  expect(gooseFilter(input)).toEqual(expected);
});

test('should return the same array if there are no geese', () => {
  const input = ["Mallard", "Hook Bill"];
  const expected = ["Mallard", "Hook Bill"];
  expect(gooseFilter(input)).toEqual(expected);
});
