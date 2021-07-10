// 使用node来处理hmr,发生变化后再更新,不优化的速度比较慢,不推荐使用
const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config')

const options = {
  contentBase:'./dist',
  hot:true,
  host:'localhost'
}

webpackDevServer.addDevServerEntrypoints(config,options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler,options)

server.listen(5000,'localhost',()=>{
  console.log('dev server listening on port 5000')
})