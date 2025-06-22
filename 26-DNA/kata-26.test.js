const complementDNA = require('./kata-26.js'); // Asegúrate que el path sea correcto

describe('complementDNA', () => {
  test('should return complementary DNA for ATTGC', () => {
    expect(complementDNA('ATTGC')).toBe('TAACG');
  });

  test('should return complementary DNA for GTAT', () => {
    expect(complementDNA('GTAT')).toBe('CATA');
  });

  test('should return empty string if input is empty', () => {
    expect(complementDNA('')).toBe('');
  });

  test('should throw error on invalid characters', () => {
    expect(() => complementDNA('ABCD')).toThrow('Invalid DNA character');
  });
});
