function speed(kmh){
    csm = Math.floor(kmh * 100000 / 3600);

    return csm;
}

module.exports = speed
