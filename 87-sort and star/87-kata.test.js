const twoSort = require('./87-kata.js');

describe('twoSort', () => {
  test('Ordena y devuelve la primera palabra con *** entre letras', () => {
    expect(
      twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])
    ).toBe("b***i***t***c***o***i***n");

    expect(
      twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])
    ).toBe("a***r***e");

    expect(
      twoSort(["abc", "aaa", "zzz"])
    ).toBe("a***a***a");
  });

  test('Funciona con un solo elemento', () => {
    expect(twoSort(["hello"])).toBe("h***e***l***l***o");
  });
});
