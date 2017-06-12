const path = require('path');
const webpack = require('webpack');

module.exports = (options) => ({
  entry: './src/app.js',
  output: {
    path: path.resolve(process.cwd(), 'bin'),
    filename: 'app.bundle.js'
  },
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true
    })
  ]
});
