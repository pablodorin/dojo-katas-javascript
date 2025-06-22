const welcome = require('./kata-40.js');

describe('welcome', () => {
  test('should return greeting in known languages', () => {
    expect(welcome('english')).toBe("Welcome");
    expect(welcome('french')).toBe("Bienvenue");
    expect(welcome('german')).toBe("Willkommen");
    expect(welcome('spanish')).toBe("Bienvenido");
  });

  test('should return "Welcome" for unknown languages', () => {
    expect(welcome('klingon')).toBe("Welcome");
    expect(welcome('japanese')).toBe("Welcome");
  });

  test('should return "Welcome" for invalid inputs', () => {
    expect(welcome(null)).toBe("Welcome");
    expect(welcome(undefined)).toBe("Welcome");
    expect(welcome("")).toBe("Welcome");
    expect(welcome("IP_ADDRESS_NOT_FOUND")).toBe("Welcome");
  });
});
