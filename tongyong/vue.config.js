// 配置路径       
const path=require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports={
  // 设置路径别名
  chainWebpack(config) { // 链式的webpack方法
    config.resolve.alias
    //用com这个别名代表./src/components的完整路径
    .set('com', resolve('./src/components'))
  },
    // 配置服务器【代理服务器】
    devServer: {
      proxy: { // 代理
        // 所有以/api开头的接口，都会被devServer代理
        '/api': { // 127.0.0.1：8080/api/findList
            target: 'http://127.0.0.1:3000/api',   // express 开启的服务器
            changeOrigin: true, // 允许跨域
            pathRewrite: { // 路径重写
              '^/api': ''
            }
        }
      }
    }
}
