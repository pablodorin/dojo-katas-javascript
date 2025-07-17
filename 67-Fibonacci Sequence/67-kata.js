function tribonacci(signature, n) {
  const result = [];

  let i = 0;
  while (i < n) {
    if (i < 3) {
      result.push(signature[i]);
    } else {
      const next = result[i - 1] + result[i - 2] + result[i - 3];
      result.push(next);
    }
    i++;
  }

  return result;
}

module.exports = tribonacci;
