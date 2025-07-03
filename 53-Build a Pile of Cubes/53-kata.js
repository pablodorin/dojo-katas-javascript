function findNb(m) {
  let n = 1;
  let result;

  if (m === 0) {
    result = 0;
  } else if (m < 0) {
    result = -1;
  } else {
    let found = false;
    result = -1; 

    while (!found) {
      let mult = n * (n + 1);
      let divided = mult / 2;
      let volume = divided * divided;

      if (volume === m) {
        result = n;
        found = true;
      } else if (volume > m) {
        found = true;
      } else {
        n++;
      }
    }
  }

  return result;
}


module.exports = { findNb };
