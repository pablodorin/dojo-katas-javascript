const alphabetPosition = require('./alphabetPosition');

describe('alphabetPosition', () => {
    test('should convert each letter to its position in the alphabet', () => {
        const input = "The sunset sets at twelve o' clock.";
        const output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
        expect(alphabetPosition(input)).toBe(output);
    });

    test('should ignore non-letter characters', () => {
        expect(alphabetPosition("123 ABC!")).toBe("1 2 3");
    });

    test('should return empty string if no letters', () => {
        expect(alphabetPosition("1234!@#$")).toBe("");
    });

    test('should handle empty input', () => {
        expect(alphabetPosition("")).toBe("");
    });

    test('should be case-insensitive', () => {
        expect(alphabetPosition("AbC")).toBe("1 2 3");
    });
});
