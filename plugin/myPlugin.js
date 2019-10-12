class MyPlugin {
  constructor (options) {
    this.options = options
  }

  injectSkeletonScreen (htmlData, callback) {
    htmlData.html = htmlData.html.replace(
      `<div id="app"></div>`,
      `<div id="app">SkeletonScreen</div>`
    )
    callback(null, htmlData)
  }

  apply (compiler) {
    // 绑定钩子事件
    compiler.hooks.compilation.tap('MyPlugin', compilation => {
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync('MyPlugin', (htmlData, callback) => {
        this.injectSkeletonScreen(htmlData, callback)
      })
    })
  }
}

module.exports = MyPlugin
