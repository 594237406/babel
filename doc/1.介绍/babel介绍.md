##今天使用下一代js

###准备好了吗？

1. 安装babel客户端和一个预设

```
npm install --save-dev babel-cli babel-preset-env
```

2. 创建一个.babelrc文件(或者在你的package.json)
```
{
  "presets": ["env"]
}
```

*在你的构建系统/IDE等安装Babel的更多信息，请参考<a href='http://babeljs.io/docs/setup/'>安装交互文档</a>*

####es2015(es6)以及超越es2015(es7)
babel通过语法转换支持最新的版本js。这些插件现在就允许你使用新的语法，不用等待浏览器支持。

请参考我们的<a href="http://babeljs.io/docs/plugins/preset-env/">环境预设</a>准备开始吧。

1. 你可以安装环境预设
```
// 这个预设可以根据浏览器环境判断安装哪种预设
npm install --save-dev babel-preset-env
```

2. 添加'env'到你的.babelrc文件中的presets数组中。


####Polyfill
由于babel只转换语法（例如箭头函数），你可以使用babel-polyfill去支持新的全局变量，比如说Promise或者原生函数，例如String.padStart。

利用<a href='https://github.com/zloirock/core-js'>core-js</a>和<a href='https://facebook.github.io/regenerator/'>regenerator</a>。

请参考我们的<a href=''>babel-polyfill</a>文档获取更多信息。

1. 你可以安装polyfill
```
npm install --save-dev babel-polyfill
```

2. 使用方法
    1. 应用入口文件最上引入这个包。
    2. 打包配置文件最上引入这个包。

####JSX and Flow
Babel可以转换jsx语法并且去掉类型注释。

参考我们的<a href='https://babeljs.io/docs/plugins/preset-react/'>React preset</a>准备开始吧。

1. 你可以安装react预设
```
npm install --save-dev babel-preset-react
```

2. 添加'react'到你的.babelrc的presets数组中。

####Pluggable
Babel可以支持自定义插件。通过已经存在或者你自己编写的插件组成我们的转换管道（多预设的组合）。通过创建预设轻松使用一组插件。

动态创建一组插件请参考<a href='https://astexplorer.net/#/KJ8AjD6maa'>astexplorer.net</a>

####Debuggable
Source map 支持所以你可以轻松调试你编译的源代码。
