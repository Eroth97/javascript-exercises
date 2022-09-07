const fibonacci = function(number) {
    let numberN = Number(number);
    if (numberN <= 0 ){
        return 'OOPS'
    }
    else if (numberN === 1){
        return 1;
    }
    else if (numberN === 2){
        return 1;
    }

    let n1, n2, fibonacci;

    for (let i = 2; i < numberN; i++){
        if (i === 2){
            n1 = 1;
            n2 = 1;
            fibonacci = n1 + n2;
        } else{
            fibonacci = n1 + n2;
        }
        n1 = n2;
        n2 = fibonacci;
    }

    return fibonacci;
};
// Do not edit below this line
module.exports = fibonacci;
