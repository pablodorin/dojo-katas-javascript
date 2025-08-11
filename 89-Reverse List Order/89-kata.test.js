const reverseList = require('./89-kata.js');

describe('Reverse List Order', () => {
  test('debe invertir el orden de [1, 2, 3, 4]', () => {
    expect(reverseList([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  test('debe invertir el orden de [9, 2, 0, 7]', () => {
    expect(reverseList([9, 2, 0, 7])).toEqual([7, 0, 2, 9]);
  });

  test('debe devolver un array vacío si la entrada es []', () => {
    expect(reverseList([])).toEqual([]);
  });

  test('debe invertir el orden de un array con un solo elemento', () => {
    expect(reverseList([5])).toEqual([5]);
  });
});
