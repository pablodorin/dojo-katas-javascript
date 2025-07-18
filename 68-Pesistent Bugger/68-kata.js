function persistence(num) {
  let count = 0;

  while (num >= 10) {
    let digits = num.toString().split("");

    let resultado = 1;
    for (let i = 0; i < digits.length; i++) {
      resultado *= Number(digits[i]);
    }

    console.log(`Resultado: ${resultado}`);

    num = resultado;
    count++;
  }

  return count;
}

module.exports = persistence;
