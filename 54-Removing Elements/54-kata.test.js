

const removeEveryOther = require('./54-kata.js'); 
describe('removeEveryOther', () => {
  test('debe eliminar cada segundo elemento de un array de strings', () => {
    expect(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))
      .toEqual(["Keep", "Keep", "Keep"]);
  });

  test('debe funcionar con un array de números', () => {
    expect(removeEveryOther([1, 2, 3, 4, 5, 6]))
      .toEqual([1, 3, 5]);
  });

  test('debe funcionar con un solo elemento', () => {
    expect(removeEveryOther(["Solo"]))
      .toEqual(["Solo"]);
  });

  test('debe funcionar con dos elementos', () => {
    expect(removeEveryOther(["Keep", "Remove"]))
      .toEqual(["Keep"]);
  });

  test('debe funcionar con booleanos', () => {
    expect(removeEveryOther([true, false, true, false]))
      .toEqual([true, true]);
  });
});
