const abreviate = require('./kata-30.js');

test('should return capital Initials', () => {
  expect(abreviate('Sam Harris')).toBe("S.H");
  expect(abreviate('patrixk fenney')).toBe("P.F");
});

