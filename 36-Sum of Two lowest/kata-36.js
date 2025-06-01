function sumLow(nums){
    let min1 = Infinity;
    let min2 = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (current < min1) {
      min2 = min1;
      min1 = current;
    } else if (current < min2) {
      min2 = current;
    }
  }

  let sum = min1 + min2;

    return sum;
}

module.exports = sumLow;