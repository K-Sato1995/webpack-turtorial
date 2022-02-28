// process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfigProd = require('./webpack.config')


// pushing BundleAnalyzerPlugin to plugins array
webpackConfigProd.plugins.push(
  new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
)

// actually running compilation and waiting for plugin to start explorer
const compiler = webpack(webpackConfigProd)
compiler.run((err, stats) => { // [Stats Object](#stats-object)
  // console.log(stats)

  if (err || stats.hasErrors()) {
    console.log(err)
  }
  compiler.close((closeErr) => {
    console.log(closeErr)
  });
});
