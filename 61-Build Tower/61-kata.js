function buildTower(n){
    let array = [];

  for (let i = 0; i < n; i++) {
    let spaces = '';
    let stars = '';

    // construyo los espacios (a izquierda y derecha)
    for (let j = 0; j < n - i - 1; j++) {
      spaces += ' ';
    }

    // construyo las estrellas
    for (let k = 0; k < (2 * i + 1); k++) {
      stars += '*';
    }

    // uno espacios + estrellas + espacios
    const floor = spaces + stars + spaces;

    array.push(floor);
  }
    return array;
}

module.exports = buildTower;