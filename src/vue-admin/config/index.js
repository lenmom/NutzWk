// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../../main/webapp/WEB-INF/views/platform/index.html'),// build 目的路径
    assetsRoot: path.resolve(__dirname, '../../main/webapp'),// build static文件夹目的路径
    assetsSubDirectory: 'static',
    assetsPublicPath: '${base!}/',// build 时vue系统资源资料增加${base!}前缀
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {// 解决开发时跨越访问问题
      '/vue': {
        target: 'http://127.0.0.1',
        pathRewrite: {
          '^/vue': ''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  }
}
