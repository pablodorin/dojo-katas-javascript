function giveTime(h, m, s){
    return ((h * 3600) + (m * 60) + s) * 1000;
}
module.exports = giveTime;