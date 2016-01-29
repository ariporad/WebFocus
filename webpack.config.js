/* eslint no-var:0, prefer-const:0 */
var webpack = require('webpack');
var resolve = require('path').resolve;

module.exports = {
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
  module: {
    loaders: [
      { test: /\.js(x)?$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
};
