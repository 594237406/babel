const babel = require('babel-core');
const babylon = require('babylon');

const ast = babylon.parse("if (true) return;", { allowReturnOutsideFunction: true });
const { code, map, ast: astTransformed } = babel.transformFromAst(ast, "if (true) return;", {});

console.log(code);