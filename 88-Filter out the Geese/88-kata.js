function gooseFilter(arr) {
  let result = [];
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  for (let i = 0; i < arr.length; i++) {
    let j = 0;
    let isGoose = false;

    while (j < geese.length && !isGoose) {
      if (arr[i] === geese[j]) {
        isGoose = true;
      }
      j++;
    }

    if (!isGoose) {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = gooseFilter;
