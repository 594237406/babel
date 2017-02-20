// 使用api转码
const babel = require('babel-core');
const babylon = require('babylon');

var code = 'const test = ()=> null';
var result = babel.transform(code, {
  presets:["es2015"]
});

console.log('transform', result.code);

babel.transformFile('../src/test.js', {
  presets:["es2015"]
}, function (err, result) {
  console.log('transformFile', eval(result.code))
});

var result = babel.transformFileSync('../src/test.js', {
  presets:["es2015"]
});
console.log('transformFileSync', eval(result.code));

var code = "if (true) return;";
var ast = babylon.parse(code, { allowReturnOutsideFunction: true });
var { code, ast } = babel.transformFromAst(ast, code);
console.log('transformFromAst', code);