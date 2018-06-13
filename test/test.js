const { readFileSync } = require('fs');
const cleanComments = require('../src/index');

const code = readFileSync('./file.js', 'utf-8');
console.log(cleanComments(code, { onlyLine: true }));
