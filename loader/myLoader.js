module.exports = function (source) {
  // source 为 compiler 传递给 Loader 的一个文件的原内容
  // 该函数需要返回处理后的内容
  console.log('这是我的第一个 Loader')
  return source
}