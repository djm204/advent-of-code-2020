const fetch = require("isomorphic-fetch");
const fs = require("fs");

const getInputFromServer = async (endpoint) => {
  //Currently AoC returns 400 - will look into later
  const result = await fetch(endpoint)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return result.statusText();
};

const getInputFromFile = (pathToFile, delimiter) => {
  const baseDir = process.env.PWD;
  return fs.readFileSync(`${baseDir}/${pathToFile}`, "utf8").split(delimiter);
};

module.exports = {
  getInputFromServer,
  getInputFromFile,
};
