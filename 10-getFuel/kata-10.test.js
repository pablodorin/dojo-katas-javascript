const getFuel = require('./kata-10.js');

describe('getFuel', () => {
    test('returns true when you have enough fuel to reach the pump', () => {
      expect(getFuel(2, 50)).toBe(true); // 2 * 25 = 50
    });
  
    test('returns false when you do NOT have enough fuel to reach the pump', () => {
      expect(getFuel(1, 50)).toBe(false); // 1 * 25 = 25 < 50
    });
  
    test('returns true when just barely enough fuel', () => {
      expect(getFuel(2, 49)).toBe(true); // 2 * 25 = 50 > 49
    });
  
    test('returns false when miles required is 0', () => {
      expect(getFuel(0, 1)).toBe(false);
    });
  });
  