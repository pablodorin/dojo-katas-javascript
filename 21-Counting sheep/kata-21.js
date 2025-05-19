function countShreeps(sheeps) {
  let count = 0;

  for (let i = 0; i < sheeps.length; i++) {
    if (sheeps[i] === true) {
      count++;
    }
  }
  return count;
}

module.exports = countShreeps;
