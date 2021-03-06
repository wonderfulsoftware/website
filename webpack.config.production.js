'use strict'

const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(require('./webpack.config')('production'), {
  plugins: [
    new ExtractTextPlugin('[contenthash].css', { allChunks: true, ignoreOrder: true })
  ],
  devtool: 'source-map'
})
