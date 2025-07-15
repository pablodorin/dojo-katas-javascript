function palindrome(str) {
  let result = true;
  let strAux1 = str.toLowerCase();
  str = str.toLowerCase();

  strAux1 = strAux1.split("");
  strAux1 = strAux1.reverse();
  let i = 0;
  while (i < str.length && result === true) {
    if (str[i] !== strAux1[i]) {
      result = false;
    }
    i++;
  }

  return result;
}

module.exports = palindrome;
