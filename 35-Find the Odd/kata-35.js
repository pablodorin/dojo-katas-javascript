function findOdd(arr) {
  const countMap = {};

  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (let num in countMap) {
    if (countMap[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
}

module.exports = findOdd;
