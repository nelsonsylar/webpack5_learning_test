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
      join: ['lodash', 'join'] // 取相当于 const {join} = require('lodash') 加入到index.js第一行
    }),
    new HtmlWebpackPlugin({title:'ProvidePlugin全局注入lodash'})
  ],
  module: {
    rules: [
      // {
      //   test: /\/src\/index.js$/,
      //   loader: "imports-loader",
      //   options: {
      //     imports: "default window this",
      //   },
      // }
      {
        test: /\/src\/global.js$/,
        loader: "exports-loader",
        options: {
          type: "commonjs",
          exports: ["file", "helpers"]
        },
      }
    ]
  },
};