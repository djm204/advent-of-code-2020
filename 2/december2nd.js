const fs = require('fs');

const baseDir = process.env.PWD;
const pathsToInput = 'input.txt';
const validate = require('./validate');

let policiesAndPasswords = [];

policiesAndPasswords = fs.readFileSync(`${baseDir}/${pathsToInput}`, 'utf8').split('\n');

const validPolicies = policiesAndPasswords.filter(policyAndPassword => {
    return validate(policyAndPassword);
});

console.log(validPolicies.length)


