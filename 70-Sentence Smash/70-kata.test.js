const sentenceSmash = require('./70-kata.js');

describe('sentenceSmash', () => {
    test('devuelve una oración con espacios entre palabras', () => {
        expect(sentenceSmash(['hello', 'world'])).toBe('hello world');
    });

    test('devuelve una oración sin espacio al final', () => {
        expect(sentenceSmash(['this', 'is', 'a', 'test'])).toBe('this is a test');
    });

    test('devuelve una palabra única sin espacios', () => {
        expect(sentenceSmash(['hello'])).toBe('hello');
    });

    test('devuelve cadena vacía si el array está vacío', () => {
        expect(sentenceSmash([])).toBe('');
    });

    test('funciona con muchas palabras', () => {
        const input = ['coding', 'is', 'fun', 'and', 'powerful'];
        const expected = 'coding is fun and powerful';
        expect(sentenceSmash(input)).toBe(expected);
    });
});
