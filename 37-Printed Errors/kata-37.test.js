const printer_error = require('./kata-37.js');

test('should return 0/14 for all correct letters', () => {
  expect(printer_error("aaabbbbhaijjjm")).toBe("0/14");
});

test('should return 8/22 for string with errors', () => {
  expect(printer_error("aaaxbbbbyyhwawiwjjjwwm")).toBe("8/22");
});

test('should return 1/1 for single error letter', () => {
  expect(printer_error("z")).toBe("1/1");
});

test('should return 0/1 for single correct letter', () => {
  expect(printer_error("a")).toBe("0/1");
});

test('should return 14/27 for half errors', () => {
  expect(printer_error("abcdefghijklmznopqrstuvwxyz")).toBe("14/27");
});
