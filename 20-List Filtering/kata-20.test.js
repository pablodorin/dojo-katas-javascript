// filter_list.test.js

const filter_list = require('./kata-20.js');

describe('filter_list', () => {
  test('filters out strings from [1,2,"a","b"]', () => {
    expect(filter_list([1, 2, 'a', 'b'])).toEqual([1, 2]);
  });

  test('filters out strings from [1,"a","b",0,15]', () => {
    expect(filter_list([1, 'a', 'b', 0, 15])).toEqual([1, 0, 15]);
  });

  test('filters out strings from [1,2,"aasf","1","123",123]', () => {
    expect(filter_list([1, 2, 'aasf', '1', '123', 123])).toEqual([1, 2, 123]);
  });

  test('returns empty list when all elements are strings', () => {
    expect(filter_list(['a', 'b', 'c'])).toEqual([]);
  });

  test('returns full list when all elements are numbers', () => {
    expect(filter_list([3, 5, 9])).toEqual([3, 5, 9]);
  });

  test('returns empty list when input is empty', () => {
    expect(filter_list([])).toEqual([]);
  });
});
