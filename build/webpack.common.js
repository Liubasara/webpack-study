const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: path.resolve(__dirname, '../src'),
  output: {
    path: path.resolve(__dirname, '../dist'), // 打包输出目录
    filename: 'js/[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true
            }
          },
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: ['ie 9-11', 'last 5 version'] //兼容IE9到11，所有浏览器最近五个版本
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          // loader 后面 limit 字段代表图片打包限制，这个限制并不是说超过了就不能打包，而是指当图片大小小于限制时会自动转成 base64 码引用。上例中大于8192字节的图片正常打包，小于8192字节的图片以 base64 的方式引用
          // name 字段指定了在打包根目录（output.path）下生成名为 images 的文件夹，并在原图片名前加上8位 hash 值
          'url-loader?limit=8192&name=images/[name].[hash:8].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      minify: {
        removeAttributeQuotes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'css/[name].[hash:8].css',
      chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash:8].css'
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../public'),
      to: path.resolve(__dirname, '../dist/static'),
      ignore: ['.*']
    }])
  ]
}
