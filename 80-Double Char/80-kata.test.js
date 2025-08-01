const doubleChar = require('./80-kata.js');

test('should double each character in the string', () => {
  expect(doubleChar("String")).toBe("SSttrriinngg");
  expect(doubleChar("Hello World")).toBe("HHeelllloo  WWoorrlldd");
  expect(doubleChar("1234!_ ")).toBe("11223344!!__  ");
  expect(doubleChar("")).toBe("");
  expect(doubleChar("A")).toBe("AA");
});
