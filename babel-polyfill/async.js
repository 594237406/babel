require("babel-polyfill");
const babel = require('babel-core');
const fs = require('fs');

var testFile = fs.readFileSync('../src/async.js', 'utf8');

var result = babel.transform(testFile, {
  presets:["es2015", "stage-0"]
});

const file = result.code;

eval(file);
