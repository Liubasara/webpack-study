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
    filename: '[name].[hash:8].js', // 输出文件名
    chunkFilename: '[name].chunkkk.js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0
        }
      }
    }
  }
}
