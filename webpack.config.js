/* eslint no-var:0, prefer-const:0 */
var resolve = require('path').resolve;

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.js(x)?$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
};
