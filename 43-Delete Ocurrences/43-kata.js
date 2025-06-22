function deleteNth(arr, n) {
  const result = [];
  const count = {};

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] <= n) {
      result.push(num);
    }
  }

  return result;
}

module.exports = deleteNth;
