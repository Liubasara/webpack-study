const merge = require("webpack-merge")
const common = require('./webpack.common.js')
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  optimization: {
    namedChunks: true,
    runtimeChunk: {
      name: 'manifest'
    },
    //编译错误时不生成
    noEmitOnErrors: true,
    splitChunks: {
      // 默认配置
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          // 覆盖配置
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackParallelUglifyPlugin({
      uglifyJS: {
        // 是否混淆变量名称
        mangle: false,
        output: {
          // 代码是否压缩为多行，false 为压缩
          beautify: false,
          // 是否去掉注释, true 或 'all' 为保留所有注释
          comments: false
        },
        compress: {
          // 删除 console
          drop_console: true,
          // 把定义一次的变量直接使用
          collapse_vars: true,
          // 合并多次用到的值，并定义为变量
          reduce_vars: true
        }
      }
    })
  ]
})
