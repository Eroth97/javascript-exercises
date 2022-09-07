const findTheOldest = function(array) {
    const d = new Date();
    let agesArray = array.map(function(element){
        if (element.yearOfDeath === undefined){
            return d.getFullYear() - element.yearOfBirth;
        }
        return element.yearOfDeath - element.yearOfBirth;
    });

    let n1;
    for (let i = 0; i < agesArray.length; i++){
        if (i === 0){
            n1 = 0;
        }
        else {
            if (agesArray[i] > agesArray[n1]){
                n1 = i;
            }
        }
    }

    return array[n1];
};

console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]));

// Do not edit below this line
module.exports = findTheOldest;
