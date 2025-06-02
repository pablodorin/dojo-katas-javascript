const findNeedle = require('./kata-39.js');

test('should find the needle at correct position', () => {
  expect(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
    .toBe("found the needle at position 5");
});

test('needle at the beginning', () => {
  expect(findNeedle(["needle", "hay", "junk"]))
    .toBe("found the needle at position 0");
});

test('needle at the end', () => {
  expect(findNeedle(["hay", "junk", "moreJunk", "needle"]))
    .toBe("found the needle at position 3");
});
