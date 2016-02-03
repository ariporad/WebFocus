/* eslint no-var:0, prefer-const:0 */
var webpack = require('webpack');
var resolve = require('path').resolve;

module.exports = {
  devtool: 'inline-source-map', // TODO: Change to external source map in production
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
  ],
  node: {
    fs: 'empty',
    net: 'mock',
    tls: 'mock',
    child_process: 'empty',
  },
  module: {
    loaders: [
      { test: /\.js(x)?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.json?$/, loader: 'json' },
    ],

    // https://github.com/airbnb/enzyme/issues/47#issuecomment-162529926
    noParse: [
      /node_modules\/sinon\//,
    ],

  },

  // https://github.com/airbnb/enzyme/issues/47#issuecomment-162529926
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon',
    },
  },
  externals: {
    jsdom: 'window',
    'react/lib/ExecutionEnvironment': true,
  },
};
