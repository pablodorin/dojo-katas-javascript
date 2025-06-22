const sumArray = require('./46-kata');

describe('sumArray', () => {
    test('sums [1, 5.2, 4, 0, -1] to be 9.2', () => {
        expect(sumArray([1, 5.2, 4, 0, -1])).toBeCloseTo(9.2);
    });

    test('returns 0 for empty array', () => {
        expect(sumArray([])).toBe(0);
    });

    test('returns -2.398 for [-2.398]', () => {
        expect(sumArray([-2.398])).toBeCloseTo(-2.398);
    });

    test('works with all positive numbers', () => {
        expect(sumArray([10, 20, 30])).toBe(60);
    });

    test('works with all negative numbers', () => {
        expect(sumArray([-1, -2, -3])).toBe(-6);
    });

    test('works with decimal numbers', () => {
        expect(sumArray([0.1, 0.2, 0.3])).toBeCloseTo(0.6);
    });
});
