const repeatString = function(string, num) {
    if (num >= 0){
    let stringRep = '';
    for (let i = 0; i < num; i++){
        stringRep += string;
    }
    return stringRep;
    } else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
