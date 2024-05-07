const repeatString = function(phrase, numberOfReps) {
    let newString = '';
    if (numberOfReps < 0) { 
        return 'ERROR'
    }
    else {
    for ( i=0; i < numberOfReps; i++) {
        newString += phrase;
    }
    return newString;
    }    
};

// Do not edit below this line
module.exports = repeatString;
