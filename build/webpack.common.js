const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src'),
  output: {
    path: path.resolve(__dirname, '../dist'), // 打包输出目录
    filename: 'js/[name].[hash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      minify: {
        removeAttributeQuotes: true
      }
    })
  ]
}
