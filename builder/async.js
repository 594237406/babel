const babel = require('babel-core');
const fs = require('fs');

var testFile = fs.readFileSync('../src/async.js', 'utf8');

var result = babel.transform(testFile, {
  presets:["es2015", "stage-0"]
});
//console.log(result.code);
//console.log(result.map);
//console.log(result.ast);

const file = result.code;

console.log(file);
