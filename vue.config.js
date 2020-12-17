const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')

const isProduction = true
const openProxy = !true
const proxyBase = ['http://res.uxkb.cn', 'http://192.168.1.4'][1]

function createProxy(port = 8080 /** 服务器端口号 */) {
  return {
    target: `${proxyBase}:${port}/`,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      [`^/api${port}`]: ''
    }
  }
}

module.exports = {
  publicPath: './',
  chainWebpack: isProduction ? config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.optimization.minimize(true)
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        vue: {
          name: 'vue',
          test: /[\\/]node_modules[\\/]vue[\\/]/,
          priority: 0,
          chunks: 'initial',
        },
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    })
    config.module.rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()
  } : () => {},
  // webpack 相关配置
  configureWebpack: {
    mode: isProduction ? 'production' : 'development',
    devServer: {
      port: 3000,
      host: '0.0.0.0',
      hot: true,
      compress: true,
      // 使用于穿透到外网的工具
      disableHostCheck: true,
      proxy: openProxy ? { } : null,
    },
    performance: {
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: assetFilename => assetFilename.endsWith('.js')
    },
    plugins: isProduction ? [
      new OptimizeCss({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { 
          discardComments: {
            removeAll: true
          }
        }
      }),
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/i,
        minRatio: 0,
        threshold: 10240
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5, 
        minChunkSize: 100
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new TerserPlugin({
        parallel: 4
      }),
    ] : [ ] // 开发环境不使用插件
  },
  css: {
    extract: isProduction,
    sourceMap: false,
    // css预处理配置项
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/index.scss";`
      }
    },
    requireModuleExtension: true
  },
  productionSourceMap: false,
}