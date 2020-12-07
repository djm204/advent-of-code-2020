const inputParser = require("../helpers/getInput");
const passports = inputParser.getInputFromFile("input.txt", "\n\n");
const REQUIRED_FIELDS = ["ecl", "pid", "eyr", "hcl", "byr", "iyr", "hgt"];

const validate = (passport) => {
  const piecesWithValues = passport
    .split("\n")
    .map((passportLine) => passportLine.split(" "));

  let paramNames = [];
  let values = [];

  piecesWithValues.flat().forEach((pieceWithValue) => {
    const pieces = pieceWithValue.split(":");
    paramNames.push(pieces[0]);
    values.push(pieces[1]);
  });

  return REQUIRED_FIELDS.every((requiredField) => {
    return paramNames.includes(requiredField);
  });
};

let validPassports = 0;
passports.forEach((passport) => {
  if (validate(passport)) {
    validPassports++;
  }
});

console.log(validPassports);
