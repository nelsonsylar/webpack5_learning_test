var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './testsrc/index.js',
  output: {
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({title:'测试es6导入webpack-numbers'})
  ]
};