function findNeedle(haystick){
    let pos = null; 
    let i = 0; 
    let found = false; 
    while(i< haystick.length && found == false){
        if(haystick[i] == "needle"){
            found = true;
            pos = i;
        }
        i++;
    }

   let result =  "found the needle at position " + pos;
   return result; 
}

module.exports = findNeedle;
