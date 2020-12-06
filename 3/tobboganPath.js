const { start } = require('repl');
const inputParser = require('../helpers/getInput');
const inputLines = inputParser.getInputFromFile('input.txt');
const ROW_LENGTH = inputLines[0].length;
let skierPosition = 0;

const getNewSkierPosition = () => {
    skierPosition += 3;

    if (skierPosition >= ROW_LENGTH) {
        skierPosition -= ROW_LENGTH;
    }

    return skierPosition
}

const moveDown = (slopeRow) => {
    slopeRow++;
    getNewSkierPosition();
}

const isTree = (line, position) => {
    return line.split('')[position] === '#';
}

const ski = () => {
    let treeCount = 0;

    inputLines.forEach((line) => {
        if(isTree(line, skierPosition)) {
            treeCount++;
        }
        moveDown(line);
    });

    return treeCount;
}

console.log(ski());