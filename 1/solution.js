const numbers = require('./numbers');

let numbersThatEqual2020 = [];

const findNumbersThatEqual2020 = (numList) => {
    let currentNumber = numList.shift();
    
    numbersThatEqual2020 = numList.filter(num => num + currentNumber === 2020);

    if(numbersThatEqual2020.length > 0) {
        numbersThatEqual2020.push(currentNumber);
    } else {
        findNumbersThatEqual2020(numList);
   }
}

findNumbersThatEqual2020(numbers);

console.log(numbersThatEqual2020.reduce((a,b) => a * b));
