const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'none',
    entry: './src/index.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization:{
      splitChunks:{
        cacheGroups:{
          lodash: {
            name: 'lodash',
            chunks: 'all',
            test: /lodash/
        },
        }
      }
    },
    plugins: [
      new HTMLWebpackPlugin({
        title: 'Code Splitting'
      }),
    ],
}