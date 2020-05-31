const path = require('path')
const merge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.js')

const config = {
  target: 'node',
  mode: 'production',
  entry: './src/index.js',
  externals: [webpackNodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(scss|css)$/, loader: 'ignore-loader' },
    ],
  },
}

module.exports = merge(baseConfig, config)
