const path = require('path')

module.exports = {
  // The standard entry point and output config
  // 每个页面的js文件
  entry: {
    home: './src/js/home',
    detail: './src/js/detail'
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包输出目录
    publicPath: '/static/build/', // webpack-dev-server访问的路径
    filename: '[name].js', // 输出文件名
    chunkFilename: 'bundle-[id].js' // 输出chunk文件名
  }
}
