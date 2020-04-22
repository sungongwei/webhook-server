// let webpack = require('webpack')
const { entries } = require('./entries')
let path = require('path')
const rules = require('./rules');
const plugins = require('./plugins');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// html打包
console.log('开始进入 webpack!');
// 获取本地ip
const ip = require('ip').address()
console.log(ip, 'ip')
module.exports = {
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: { // 开发服务器相关配置
    host: ip,
    contentBase: path.join(__dirname, 'dist'), // 服务器资源的根目录，不写的话，默认为bundle.js
    compress: true, // 服务器资源采用gzip压缩
    port: 5000, // 运行的端口
    overlay: true, // 出错代码是否显示在html页面上
    hot: true, //热加载
    proxy: {
      '/api': {
        target: 'http://n.168trucker.cn',
        pathRewrite: {
          '^/api': 'http://n.168trucker.cn'
        },
        changeOrigin: true
      },
      '/video': {
        target: 'https://v0.api.upyun.com',
        pathRewrite: {
          '^/api': 'https://v0.api.upyun.com'
        },
        changeOrigin: true
      }
    }
  },
  module: {
    rules,
  },
  plugins,
  resolve: { // 解析模块的可选项
    // extensions: ['.js', '.json']
    alias: {
      // '@/api': path.resolve(__dirname, '../../../../module/html'),
      'api': path.resolve(__dirname, '../../../../module/html/api'),
      'utils': path.resolve(__dirname, '../../../../module/html/utils'),
    },
  },
}
console.log(`${ip}:9000`)
