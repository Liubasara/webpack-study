const loaderUtils = require('loader-utils')

function myLoader (source) {
  // 在 exports.raw === true 时，Webpack 传给 Loader 的 source 是 Buffer 类型的
  console.log(this.context)
  // Loader 返回的类型也可以是 Buffer 类型的
  // 在 exports.raw !== true 时，Loader 也可以返回 Buffer 类型的结果
  return source
}

// 通过 exports.raw 属性告诉 Webpack 该 Loader 是否需要二进制数据
myLoader.raw = true

module.exports = myLoader