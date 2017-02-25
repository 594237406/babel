##.babelrc
如何使用.babelrc

所有的Babel API选项除了回调（因为.babelrc文件序列化成json5）。

Example:
```
{
  "plugins": ["transform-react-jsx"],
  "ignore": [
    "foo.js",
    "bar/**/*.js"
  ]
}
```
####通过package.json
你可以在.babelrc和package.json中二选其一：
```
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    // my babel config here
  }
}
```
#### 配置渠道

当你在某一环境中，你可以指定特殊渠道
```
{
  "env": {
    "production": {
      "plugins": ["transform-react-constant-elements"]
    }
  }
}
```
选项特殊的环境合并并重写non-env字段。
Options specific to a certain environment are merged into and overwrite non-env specific options.

环境来自于process.env.BABEL_ENV字段，当你使没有指定这个字段默认为devlopment。

你可以指定环境如下：

Unix

At the start of a command:

```
BABEL_ENV=production YOUR_COMMAND_HERE
```
或者分开命令：
```
export NODE_ENV=production
```
```
YOUR_COMMAND_HERE
```

Windows
```
SET BABEL_ENV=production
YOUR_COMMAND_HERE
```

####查找方式
Babel在当前目录查找.babelrc。如果不存在，那么讲遍历目录树直到查找到.babelrc或者package.json含有babel:{}字段。

在package.json使用'bablerc':false字段停止查找，或者提供 --no-babelrc 客户端配置中。