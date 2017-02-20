// 转换es6-class
const babel = require('babel-core');
var result = babel.transform(`
  class Foo {
  
  }
  
  class Bar extends Foo {
    bar() {
      // will throw an error when this method is defined
    }
  }
`, {
  presets:["es2015"],
});
console.log(result.code);

