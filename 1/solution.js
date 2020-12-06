const numbers = require('./numbers');

let numbersThatEqual2020 = [];

const findTwoNumbersThatEqual2020 = (numList) => {
    let currentNumber = numList.shift();
    
    numbersThatEqual2020 = numList.filter(num => num + currentNumber === 2020);

    if(numbersThatEqual2020.length > 0) {
        numbersThatEqual2020.push(currentNumber);
    } else {
        findTwoNumbersThatEqual2020(numList);
   }
}

// findTwoNumbersThatEqual2020(numbers);

// console.log(numbersThatEqual2020.reduce((a,b) => a * b));

const findThreeNumbersThatEqual2020 = (numList, sumToReach) => {
    numList.sort();
    numList.forEach((num, index) => {
        let leftEdge = index + 1;
        let rightEdge = numList.length - 1;
        
        while (leftEdge < rightEdge) {
            if(num + numList[leftEdge] + numList[rightEdge] == sumToReach) {
                numbersThatEqual2020.push(num, numList[leftEdge], numList[rightEdge])
            } else if (num + numList[leftEdge] + numList[rightEdge] < sumToReach) {
                leftEdge++;
            } else {
                rightEdge--;
            }
        }
    })

}

findThreeNumbersThatEqual2020(numbers, 2020);

console.log(numbersThatEqual2020);

