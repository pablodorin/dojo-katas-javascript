function comp(array1, array2) {
  let result = true;

  if (!array1 || !array2) {
    result = false;
  } else if (array1.length !== array2.length) {
    result = false;
  } else {
    let squaredArray1 = array1.map((n) => n ** 2).sort((a, b) => a - b);
    let sortedArray2 = array2.slice().sort((a, b) => a - b);

    let i = 0;
    while (i < squaredArray1.length && result) {
      if (squaredArray1[i] !== sortedArray2[i]) {
        result = false;
      }
      i++;
    }
  }

  return result;
}

module.exports = comp;
