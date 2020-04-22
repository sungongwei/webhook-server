const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// dev:开发模式  build：打包
const event = process.env.npm_lifecycle_event
console.log(event, 'event')
module.exports = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },
  // css less 
  {
    test: /\.(less|css)$/,
    use: [
      event === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        }
      },
      'less-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('autoprefixer') /*在这里添加*/
          ]
        }
      }
    ]
  },
  {
    test: /\.html$/,
    use: [{
      loader: 'html-loader',
      options: {
        interpolate: true,
        minimize: false
      }
    }]
  }, {
    test: /\.ejs/,
    use: ['ejs-loader'],
  }
]
