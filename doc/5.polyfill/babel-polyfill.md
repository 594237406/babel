babel包含polyfill包含regenerator runtime和core-js。

可以模拟完整的es2015环境，使用一个应用，相对于类库，这个更好一些。当使用babel-node时polyfill自动加载。

如果你使用了类似promise或WeakMap，静态方法比如Array.form或者Object.assign,实例方法比如Array.prototype.includes与生成函数（提供你使用regenerator插件）。polyfill添加到全局范围或原生的prototypes中，例如String这样的类去实现扩展。 

如果你需要一个不会修改全局的类库/工具，关注下 transform-runtime插件。这意味着你不能使用实例方法类似上文提及到的Array.prototype.includes。

注释：根据你使用的es2015方法，你可能不需要使用 babel-polyfill 或者 runtime 插件。


####安装
```
npm install --save babel-polyfill
```

####Node / Browserify / Webpack 中使用

想使用polyfill你需要require它在你的程序入口处最上面一行。
```
require("babel-polyfill");
```
如果你使用了es6 import语法在你的程序入口处，你需要引入polyfill在入口处的最上一行确保最先加载。
```
import "babel-polyfill";
```

使用 webpack.config.js, 添加 babel-polyfill 到你的入口数组。  
```
module.exports = {
  entry: ["babel-polyfill", "./app/js"]
};
```

####浏览器中使用
把npm发布版本的babel-polyfill目录下的dist/polyfill.js引入页面。必须引入在编译的代码之前。

