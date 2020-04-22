const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');
// 压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// 清理 dist 文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin')
// css打包
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const TransfromAssets = require('./transfromAssets');
const path = require('path');
const fs = require('fs')
let PATH = './views'
const files = fs.readdirSync(PATH)
let plugins = [];

files.forEach(file => {
  file = file.replace(/\.ejs$/, '')
  plugins.push(
    new HtmlWebpackPlugin({
      filename: `${file}.html`,
      template: path.resolve(__dirname, '../../views', `${file}.ejs`),
      inject: true,
      chunks: ['common', file],
      path: file,
      minify: {
        collapseWhitespace: true
      }
    })
  )
})

const otherPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  // new TransfromAssets()
  // 自动清理 dist 文件夹
  new CleanWebpackPlugin('dist', {
    root: path.resolve(__dirname, '../')
  }),
  new ExtractTextPlugin("styles.css"),
  // 压缩css
  new OptimizeCssAssetsPlugin({ // 优化css
    cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
    cssProcessorOptions: {
      discardComments: {
        removeAll: true
      }
    },
    canPrint: true //是否将插件信息打印到控制台
  }),
  // 分包工具
  new webpack.optimize.SplitChunksPlugin({
    chunks: 'all',
    minSize: 20000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    name: true
  }),
  // css输出
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  }),
];

plugins = [...plugins, ...otherPlugins];

module.exports = plugins;
