function findStray(arr) {
  const [a, b, c] = arr;

  // Determinamos cuál es el número que se repite
  const common = a === b || a === c ? a : b;

  // Buscamos el que es distinto
  return arr.find(n => n !== common);
}

module.exports = findStray;
