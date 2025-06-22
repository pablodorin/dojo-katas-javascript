function getGrade(s1, s2, s3) {
    let prom = (s1+s2+s3)/3;
    let result = 'F'; 

    switch(true){
        case prom >= 90:
        result = 'A';
        break;
        case prom >= 80:
        result = 'B';
        break;
        case prom >= 70:
        result = 'C';
        break;
        case prom >= 60:
        result = 'D';
        break;
        default: 
        result = 'F';
    }

return result;
}

module.exports = { getGrade };
