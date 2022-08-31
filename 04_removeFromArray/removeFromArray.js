const removeFromArray = function() {
    let newArray = [];

    for (let i = 1; i < arguments.length; i++){
        for (let j = 0; j < arguments[0].length; j++){
            if (arguments[0][j] === arguments[i]){
                delete(arguments[0][j]);
            }
        }
    }

    for (let k = 0; k < arguments[0].length; k++){
        if (arguments[0][k] !== undefined){
            newArray.push(arguments[0][k]);
        }
    }
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
