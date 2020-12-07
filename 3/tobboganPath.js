const inputParser = require("../helpers/getInput");
const inputLines = inputParser.getInputFromFile("input.txt");
const ROW_LENGTH = inputLines[0].length;

const skiRoutes = [
  {
    right: 1,
    down: 1,
  },
  {
    right: 3,
    down: 1,
  },
  {
    right: 5,
    down: 1,
  },
  {
    right: 7,
    down: 1,
  },
  {
    right: 1,
    down: 2,
  },
];

const skier = (right, down) => {
  let skierPosition = 0;

  const getNewSkierPosition = () => {
    skierPosition += right;

    if (skierPosition >= ROW_LENGTH) {
      skierPosition -= ROW_LENGTH;
    }

    return skierPosition;
  };

  const isTree = (line, position) => {
    return line.split("")[position] === "#";
  };

  const ski = () => {
    let treeCount = 0;

    for (let i = 0; i < inputLines.length; i += down) {
      if (isTree(inputLines[i], skierPosition)) {
        treeCount++;
      }
      getNewSkierPosition();
    }

    return treeCount;
  };

  return {
    ski,
  };
};

let trees = [];

skiRoutes.forEach((skiRoute) => {
  const { right, down } = skiRoute;

  trees.push(skier(right, down).ski());
});

console.log(trees.reduce((a, b) => a * b));
