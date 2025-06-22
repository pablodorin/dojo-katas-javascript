function digPow(n, p) {
  const digits = n.toString().split('').map(Number);
  const sum = digits.reduce((acc, digit, index) => {
    return acc + Math.pow(digit, p + index);
  }, 0);

  const k = sum / n;
  return Number.isInteger(k) ? k : -1;
}

module.exports = digPow;
