function writeExpanded(n) {
    let r = "";
    
    if (n !== 0) {
        let digits = n.toString().split('');
        let length = digits.length;

        for (let i = 0; i < length; i++) {
            let digit = digits[i];

            if (digit !== '0') {
                let component = digit;

                for (let j = i + 1; j < length; j++) {
                    component += '0';
                }

                if (r !== "") {
                    r += " + ";
                }

                r += component;
            }
        }
    }

    return r;
}

module.exports = writeExpanded;
