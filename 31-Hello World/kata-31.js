function hw(regard){
    let hw = 'Hello World';

    if(regard === regard.toLowerCase()){
        hw = hw.toLowerCase();
    } else if(regard === regard.toUpperCase()){
        hw = hw.toUpperCase();
    }

    return hw;
}

module.exports = hw;