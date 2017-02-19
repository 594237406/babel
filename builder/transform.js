const babel = require('babel-core');
const fs = require('fs');

var testFile = fs.readFileSync('../src/test.js', 'utf8');

var result = babel.transform(testFile, {
  presets:["es2015"]
});
//console.log(result.code);
//console.log(result.map);
//console.log(result.ast);

const file = eval(result.code);

console.log(file);
