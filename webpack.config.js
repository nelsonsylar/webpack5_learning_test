var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    libraryTarget: 'umd', //umd方式(包括AMD,COMMONJS)

    library: 'webpackNumbers', //暴露库名为webpackNumbers,常与globalObject: 'this'一起用
    globalObject: 'this' // 暴露到哪node =>global window=>window
  },
  externals: { // 不把lodash打包,用户应该自行装lodash,
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
};