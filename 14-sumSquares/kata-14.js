function sumSquare(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    let numero = numbers[i];
    let cuadrado = numero * numero; // elevamos al cuadrado a mano
    total = total + cuadrado;       // sumamos al total
  }

  return total;
}

module.exports = sumSquare;