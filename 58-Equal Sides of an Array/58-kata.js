function findEvenIndex(arr) {
  let r = -1;
  let i = 0;
  let found = false;

  while (i < arr.length && !found) {
    let leftSum = 0;
    let rightSum = 0;
    
    let j = 0;
    while( j < i) {
      leftSum += arr[j];
      j++;
    }

    j = i + 1;
    while(j < arr.length) {
      rightSum += arr[j];
      j++;
    }

    if(leftSum == rightSum) {
      r = i;
      found = true;
    }
    i++;
  }

  return r;
}

module.exports = findEvenIndex;
