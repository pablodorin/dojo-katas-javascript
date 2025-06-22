const areYouPlayingBanjo = require('./kata-27');

describe('areYouPlayingBanjo', () => {
  test('Names starting with R should play banjo', () => {
    expect(areYouPlayingBanjo('Rick')).toBe('Rick plays banjo');
    expect(areYouPlayingBanjo('rachel')).toBe('rachel plays banjo');
  });

  test('Names not starting with R should not play banjo', () => {
    expect(areYouPlayingBanjo('Paul')).toBe('Paul does not play banjo');
    expect(areYouPlayingBanjo('mike')).toBe('mike does not play banjo');
  });

  test('Edge case: single letter R or r', () => {
    expect(areYouPlayingBanjo('R')).toBe('R plays banjo');
    expect(areYouPlayingBanjo('r')).toBe('r plays banjo');
  });
});
