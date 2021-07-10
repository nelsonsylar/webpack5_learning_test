const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //HtmlWebpackPlugin属于插件类,需要放到plugins,并通过new的方式来实例化使用
//webpack是属于node环境,所以默认不支持es6的import,需要使用require
module.exports = {
  entry:{
    app:'./src/index.js',
    print:'./src/print.js'
  },
  output:{
    filename: '[name].bundle.js', // [name]为entry的key,如entry为app,则filename为app.bundle.js
    path: path.resolve(__dirname,'dist') // webpack涉及到文件地址的情况,均需要使用path,__dirname在node里表示,当前文件所对应的文件夹位置
    //而 path.resolve(__dirname,'文件夹名字')是一个固定套路,得到当前目录的dist文件夹位置
  },
  plugins:[ 
    new HtmlWebpackPlugin({title: 'Output Management'})
    // 使用该插件后会默认生成html,并自动引入output输出的js文件,可传入option来配置对应的html模板
    // https://github.com/jantimon/html-webpack-plugin#configuration
  ]
}