const palindromes = function (word) {
    const reg1 = /[^a-zA-z]/g;
    let wordClean = word.replace(reg1, '').toLowerCase();
    for (let i = 0; i < wordClean.length; i++){
        if (wordClean[i] != wordClean[wordClean.length-(i+1)]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
