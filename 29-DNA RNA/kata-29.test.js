const getRNA = require('./kata-29.js');

test('should return RNA', () => {
  expect(getRNA('GATACA')).toBe("GAUACA");
  expect(getRNA('GCAT')).toBe("GCAU");
  expect(getRNA('GATCCAT')).toBe("GAUCCAU");
  expect(getRNA('')).toBe("");
  expect(getRNA('GACGAC')).toBe("GACGAC");
  expect(getRNA('TG')).toBe("UG");
  expect(getRNA('GATCATACGTACTGGGTTTCT')).toBe("GAUCAUACGUACUGGGUUUCU");
});


