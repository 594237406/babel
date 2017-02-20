// 提供内建模块转码与async转码等功能

require("babel-polyfill");
const babel = require('babel-core');
const fs = require('fs');

var testFile = fs.readFileSync('../src/async.js', 'utf8');

var result = babel.transform(testFile, {
  presets:["es2015", "stage-0"]
});

const file = result.code;

eval(file);
