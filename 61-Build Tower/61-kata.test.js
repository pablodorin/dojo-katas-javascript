const buildTower = require('./61-kata.js');

describe('buildTower', () => {
  test('builds a tower with 1 floor', () => {
    expect(buildTower(1)).toEqual([
      '*'
    ]);
  });

  test('builds a tower with 3 floors', () => {
    expect(buildTower(3)).toEqual([
      '  *  ',
      ' *** ',
      '*****'
    ]);
  });

  test('builds a tower with 6 floors', () => {
    expect(buildTower(6)).toEqual([
      '     *     ',
      '    ***    ',
      '   *****   ',
      '  *******  ',
      ' ********* ',
      '***********'
    ]);
  });

  test('builds a tower with 0 floors (edge case)', () => {
    expect(buildTower(0)).toEqual([]);
  });
});
