function printer_error(str){
    let errors = 0;

    for (let i = 0; i < str.length; i++) {
        let l = str[i];
        if (l < 'a' || l > 'm') {
            errors++;
        }
    }

    return errors + '/' + str.length;
}


module.exports = printer_error;