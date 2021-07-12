const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({ // webpack的ProvidePlugin来全局使用lodash
      _: 'lodash'
    }),
    new HtmlWebpackPlugin({title:'ProvidePlugin全局注入lodash'})
  ]
};