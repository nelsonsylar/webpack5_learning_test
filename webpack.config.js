const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ] // 导入时可省去后缀名
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({title:'typescript in webpack'})
  ]
};