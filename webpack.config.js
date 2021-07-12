const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    }),
    // new webpack.optimize.CommonsChunkPlugin({ //公共引入的包的设置   以被弃用,使用optimization
    //     name: 'common' // 指定公共 bundle 的名称。
    // })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization:{
    splitChunks:{
      cacheGroups:{
        commons :{
          name:"common",
          chunks:'initial',
          minChunks:2
        }
      }
    }
  }
};