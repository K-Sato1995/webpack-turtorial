// process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


const analyze = async () => {
  const webpackConfigProd = require('./webpack.config')
  webpackConfigProd.plugins.push(
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
  )
  const compiler = webpack(webpackConfigProd)
  await build(compiler)
}


function build(compiler) {
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => { // [Stats Object](#stats-object)
      compiler.close((closeErr) => {
        core.info(closeErr)
        reject(closeErr)
      });
    });

    compiler.hooks.done.tap('IDoNotUnderstandWhatThisStringIsForButItCannotBeEmpty', () => {
      resolve('compile finished');
    });
  });
}

const asyncFunc = async () => {
  await analyze()
}
asyncFunc()
