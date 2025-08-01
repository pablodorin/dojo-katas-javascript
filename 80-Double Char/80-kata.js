function doubleChar(str) {
  return str.split('').map(char => char + char).join('');
}

module.exports = doubleChar;