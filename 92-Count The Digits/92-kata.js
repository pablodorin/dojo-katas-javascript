
function nbDig(n, d) {
  const ds = String(d);
  let total = 0;

  for (let k = 0; k <= n; k++) {
    const sq = String(k * k);
    for (let i = 0; i < sq.length; i++) {
      if (sq[i] === ds) {
        total++;
      }
    }
  }

  return total;
}

module.exports = nbDig;
