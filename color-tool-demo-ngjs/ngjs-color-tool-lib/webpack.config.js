const webpack = require('webpack');
const path = require('path');



const config = {
  mode: 'production',
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.html$/, loader: 'ng-cache-loader?prefix=[dir]/[dir]' },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

module.exports = config;