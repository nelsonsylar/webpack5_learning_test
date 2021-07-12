const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main:'./src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
       title: 'Caching'
    })
  ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization:{
    runtimeChunk:{
      name:'manifest' // webpack在入口chunk中,包含了某些样板(webpack运行时的引导代码),这里使用runtimeChunk抽离出来,后续不修改的情况下就使用之前的缓存
    },
    splitChunks:{ //把引入的第三方包抽离出来,后续不修改的情况下就使用之前的缓存
      cacheGroups:{
        vendor:{
          name:'vendor',
          chunks:'initial',
        }
      }
    }
  }
};