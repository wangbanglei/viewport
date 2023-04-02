const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      },
      less: {
        modifyVars: {
          'nav-bar-title-text-color': "#ccc",
          hack: `true; @import "${path.join(
            __dirname,
            './assets/styles/common.less'
          )}";`
        }
      }
    },
  },
  configureWebpack: {
    resolve: {
        alias: {
            '@': resolve('src'),
            '#': resolve('assets')
        }
    }
  }
};