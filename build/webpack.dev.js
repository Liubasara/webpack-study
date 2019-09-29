const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  // 详情https://www.webpackjs.com/configuration/devtool/
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    contentBase: 'index.html',
    port: 8080,
    host: 'localhost',
    overlay: true,
    compress: true,
    open: true,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [
    // 启用热更新配置项
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
