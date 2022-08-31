const reverseString = function(string) {
    const words = []
    for(let i = 0; i < string.length; i++){
        words[i] = string[string.length - 1 - i];
    }
    return words.join("");
};

// Do not edit below this line
module.exports = reverseString;
