const fs = require('fs');

const baseDir = process.env.PWD;
const pathsToInput = 'input.txt';
const validateCharacterCount = require('./validateCharacterCount');
const validateCharacterPosition = require('./validateCharacterPosition');

let policiesAndPasswords = [];

policiesAndPasswords = fs.readFileSync(`${baseDir}/${pathsToInput}`, 'utf8').split('\n');

const validCharacterCountPolicies = policiesAndPasswords.filter(policyAndPassword => {
    return validateCharacterCount(policyAndPassword);
});

const validCharacterPositionPolicies = policiesAndPasswords.filter(policyAndPassword => {
    return validateCharacterPosition(policyAndPassword);
});

console.log(validCharacterPositionPolicies.length);

