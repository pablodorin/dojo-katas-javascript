const evenOrOdd = require('./kata-28.js');

test('should return "Even" for even numbers', () => {
  expect(evenOrOdd(2)).toBe("Even");
  expect(evenOrOdd(0)).toBe("Even");
  expect(evenOrOdd(-4)).toBe("Even");
});

test('should return "Odd" for odd numbers', () => {
  expect(evenOrOdd(1)).toBe("Odd");
  expect(evenOrOdd(-3)).toBe("Odd");
  expect(evenOrOdd(99)).toBe("Odd");
});
