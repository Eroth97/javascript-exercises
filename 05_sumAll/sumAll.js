const sumAll = function(num1, num2) {
    if (typeof(num1) === typeof(2) && typeof(num2) === typeof(2)){
        if (num1 > 0 && num2 > 0){
            let sum = 0;
            if (num1 < num2){
                for (let i = num1; i < num2 + 1; i++){
                    sum += i;
                }
            }
            else if (num1 > num2){
                for (let i = num2; i < num1 + 1; i++){
                    sum += i;
                }
            }
            return sum;
        }
        else{
            return 'ERROR';
        }
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
