const up = require('./kata-34.js');

test('up', () => {
  expect(up("alfa")).toBe("ALFA");
  expect(up("4lf4")).toBe("4LF4");
  expect(up("ALFA")).toBe("ALFA");
  expect(up("")).toBe("");
});

