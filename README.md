# webpack

静态模块打包器 递归构建依赖关系图 文件间的依赖

基础概念

- entry
- output
  - filename ` [name]``[hash] `占位符
  - path
  - publicPath
- loader `module.rules` `test`和`use` 将所有类型的文件转换成应用程序依赖关系图可以直接引用的模块。支持链式，反序执行
- plugin 处理执行各种任务。 webpack 插件是一个具有 apply 属性 JavaScript 对象。apply 属性会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。
- mode 启用相应模式的内置优化

模块解析
当打包模块时，webpack 使用 `enhanced-resolve` 来解析文件路径。
模块路径 模块将在 `resolve.modules` 中指定的所有目录内搜索。模块路径通过使用 resolve.alias 配置选项来创建一个别名。`resolve.extensions`选项告诉解析器在解析中能够接受哪些扩展名。

manifest

- Runtime 在浏览器运行时，webpack 用来连接模块化的应用程序的所有代码。runtime 包含：在模块交互时，连接模块所需的加载和解析逻辑。包括浏览器中的已加载模块的连接，以及懒加载模块的执行逻辑。
- Manifest 当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块。无论你选择哪种模块语法，那些 import 或 require 语句现在都已经转换为 `__webpack_require__`方法，此方法指向模块标识符(module identifier)。通过使用 manifest 中的数据，runtime 将能够查询模块标识符，检索出背后对应的模块。

构建目标(target)
模块热替换(MHR)

实操

```bash
yarn add webpack webpack-cli -D
```

常用 loader

- file-loader
- url-loader

常用 plugin

- HtmlWebpackPlugin
