class MyPlugin {
  constructor (options) {
    console.log('plugin constructor:', options)
  }
  apply (compiler) {
    // 绑定钩子事件
    compiler.plugin('compilation', compilation => {
      console.log('MyPlugin')
      compilation.plugin('buildModule', m => {
        console.log('buildModule', m)
      })
    })
  }
}

module.exports = MyPlugin
