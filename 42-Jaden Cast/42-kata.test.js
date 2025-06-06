const toJadenCase = require('./42-kata.js');

describe('Jaden Casing Strings', () => {
  test('should capitalize each word as Jaden Smith would', () => {
    expect(
      toJadenCase("How can mirrors be real if our eyes aren't real")
    ).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real");

    expect(
      toJadenCase("most trees are blue")
    ).toBe("Most Trees Are Blue");

    expect(
      toJadenCase("people tell me to smile i tell them the lack of emotion in my face doesn't mean i'm unhappy")
    ).toBe("People Tell Me To Smile I Tell Them The Lack Of Emotion In My Face Doesn't Mean I'm Unhappy");
  });

  test('should handle empty strings', () => {
    expect(toJadenCase("")).toBe("");
  });

  test('should handle strings with multiple spaces', () => {
    expect(toJadenCase("hello   world")).toBe("Hello   World");
  });
});
