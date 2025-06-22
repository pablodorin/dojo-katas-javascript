

function complementDNA(dna) {
  let result = '';

  for (let i = 0; i < dna.length; i++) {
    let char = dna[i];

    if (char === 'A') {
      result += 'T';
    } else if (char === 'T') {
      result += 'A';
    } else if (char === 'C') {
      result += 'G';
    } else if (char === 'G') {
      result += 'C';
    } else {
      throw new Error('Invalid DNA character');
    }
  }

  return result;
}

module.exports = complementDNA;