const {merge} = require('webpack-merge'); // 使用webpack-merge options
const common = require('./webpack.common.js');
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});