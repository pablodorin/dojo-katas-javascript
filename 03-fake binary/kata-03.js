function fakeBin(x) {
    return x.split('').map(c => c < '5' ? '0' : '1').join('');
}

module.exports = fakeBin;
  
  