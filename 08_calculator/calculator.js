const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
	return array.reduce(
    (oldValue, newValue) => oldValue + newValue,
    0)
};

const multiply = function(array) {
  return array.reduce(
    (oldValue, newValue) => oldValue*newValue
  )
};

const power = function(n1, n2) {
	return Math.pow(n1,n2);
};

const factorial = function(n1) {
	if (n1 === 1 || n1 === 0){
    return 1;
  } else{
    let fact = 1;
    for(let i = 0; i < n1; i++){
      fact *= i+1;
      console.log(fact);
    }
    return fact;
  }
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
