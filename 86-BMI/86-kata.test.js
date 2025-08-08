const bmi = require('./86-kata.js');

describe('bmi', () => {
    test('should return "Underweight" when BMI is <= 18.5', () => {
        expect(bmi(50, 1.8)).toBe("Underweight"); // BMI ≈ 15.43
    });

    test('should return "Normal" when BMI is <= 25.0', () => {
        expect(bmi(70, 1.75)).toBe("Normal"); // BMI ≈ 22.86
    });

    test('should return "Overweight" when BMI is <= 30.0', () => {
        expect(bmi(85, 1.75)).toBe("Overweight"); // BMI ≈ 27.76
    });

    test('should return "Obese" when BMI is > 30', () => {
        expect(bmi(110, 1.75)).toBe("Obese"); // BMI ≈ 35.92
    });
});
